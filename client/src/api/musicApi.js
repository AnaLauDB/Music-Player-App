import axiosClient from "./client/axiosClient";
import { DEEZER_ENDPOINTS } from "./endpoints/deezerEndpoints";

import {
    adaptTrack,
    adaptArtist,
    adaptAlbum,
    adaptPlaylist,
} from "./adapters/musicAdapter";

const request = async ({ endpoint, params = {} }) => {
    try {
        const response = await axiosClient.get(endpoint, {
            params,
        });

        return response.data;
    } catch (error) {
        console.error("Music API Error:", error);
        throw error;
    }
};

const normalize = (value) =>
    typeof value === "string"
        ? value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
        : "";

/**
 * Busca canciones por texto libre.
 */
export const searchTracks = async (query) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.SEARCH_TRACK,
        params: { q: query, limit: 25 },
    });

    return (data.data ?? []).map(adaptTrack);
};

/**
 * Busca artistas. A diferencia de /search, este endpoint devuelve
 * el objeto artista completo, con picture y nb_fan.
 */
export const searchArtists = async (query) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.SEARCH_ARTIST,
        params: { q: query, limit: 12 },
    });

    return (data.data ?? []).map(adaptArtist);
};

/**
 * Busca albums. Deezer no ofrece este filtro en /search, si no
 * mediante el endpoint dedicado /search/album.
 */
export const searchAlbums = async (query) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.SEARCH_ALBUM,
        params: { q: query, limit: 12 },
    });

    return (data.data ?? []).map(adaptAlbum);
};

/**
 * Busca playlists mediante /search/playlist.
 */
export const searchPlaylists = async (query) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.SEARCH_PLAYLIST,
        params: { q: query, limit: 12 },
    });

    return (data.data ?? []).map(adaptPlaylist);
};

/**
 * Resuelve que vista debe mostrarse a partir de la consulta.
 *
 * Se comparan los resultados de cada categoria con la consulta
 * normalizada. Cuando un titulo coincide de forma exacta se asume
 * que el usuario busca esa entidad; si no, se muestran canciones.
 */
/**
 * Elige el artista mas relevante.
 *
 * Deezer devuelve homonimos y artistas de seguimiento en cualquier orden
 * (por ejemplo "Michael Jackson" con 198 oyentes antes que el original
 * con 13M), asi que se prioriza el nombre exacto y luego los oyentes.
 */
const pickArtist = (artists, query) => {
    const target = normalize(query.trim());

    const exact = artists.filter(
        (artist) => normalize(artist.name) === target
    );

    const pool = exact.length ? exact : artists;

    return [...pool].sort((a, b) => b.fans - a.fans)[0] ?? null;
};

const detectIntent = ({ query, artists, albums, playlists }) => {
    const target = normalize(query.trim());

    if (!target) return "track";

    const artistMatch = artists.some(
        (artist) => normalize(artist.name) === target
    );

    if (artistMatch) return "artist";

    if (albums.some((album) => normalize(album.title) === target)) {
        return "album";
    }

    if (playlists.some((list) => normalize(list.title) === target)) {
        return "playlist";
    }

    return "track";
};

/**
 * Consulta las cuatro categorias y decide que vista mostrar.
 *
 * Cuando la intencion es "artist" se descarga ademas el detalle del
 * artista: canciones populares, discografia y playlists.
 */
export const searchAll = async (query) => {
    const [tracks, artists, albums, playlists] = await Promise.all([
        searchTracks(query),
        searchArtists(query),
        searchAlbums(query),
        searchPlaylists(query),
    ]);

    const intent = detectIntent({ query, artists, albums, playlists });

    let artistOverview = null;

    if (intent === "artist") {
        const target = pickArtist(artists, query);

        if (target) {
            artistOverview = await getArtistOverview(String(target.id));
        }
    }

    return {
        query,
        intent,
        tracks,
        artists,
        albums,
        playlists,
        artist: artistOverview?.artist ?? null,
        artistTopTracks: artistOverview?.topTracks ?? [],
        artistAlbums: artistOverview?.albums ?? [],
        artistPlaylists: artistOverview?.playlists ?? [],
    };
};

export const getArtist = async (artistId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.ARTIST}/${artistId}`,
    });

    return adaptArtist(data);
};

/**
 * Canciones populares de un artista.
 */
export const getArtistTopTracks = async (artistId) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.ARTIST_TOP.replace("{id}", artistId),
        params: { limit: 10 },
    });

    return data.data.map(adaptTrack);
};

/**
 * Discos de un artista.
 * Deezer no devuelve nb_tracks ni el objeto artist en este listado,
 * por lo que se completan con el nombre del artista solicitado.
 */
export const getArtistAlbums = async (artistId) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.ARTIST_ALBUMS.replace("{id}", artistId),
        params: { limit: 12 },
    });

    return data.data.map((album) => ({
        ...adaptAlbum(album),
        artist: album.artist?.name ?? album.contributors?.[0]?.name ?? null,
        tracks: album.nb_tracks ?? null,
    }));
};

/**
 * Playlists donde aparece un artista.
 * Este endpoint no devuelve nb_tracks, asi que se deja en null
 * para que la interfaz no muestre un numero inexistente.
 */
export const getArtistPlaylists = async (artistId) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.ARTIST_PLAYLISTS.replace(
            "{id}",
            artistId
        ),
        params: { limit: 12 },
    });

    return data.data.map((playlist) => ({
        ...adaptPlaylist(playlist),
        tracks: playlist.nb_tracks ?? null,
    }));
};

/**
 * Detalle completo de un artista para la vista de resultados.
 */
export const getArtistOverview = async (artistId) => {
    const [artist, topTracks, albums, playlists] = await Promise.all([
        getArtist(artistId),
        getArtistTopTracks(artistId),
        getArtistAlbums(artistId),
        getArtistPlaylists(artistId),
    ]);

    return { artist, topTracks, albums, playlists };
};

export const getAlbum = async (albumId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.ALBUM}/${albumId}`,
    });

    return adaptAlbum(data);
};

export const getPlaylist = async (playlistId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.PLAYLIST}/${playlistId}`,
    });

    return adaptPlaylist(data);
};

export const getChart = async () => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.CHART,
    });

    return {
        tracks: data.tracks.data.map(adaptTrack),
        artists: data.artists.data.map(adaptArtist),
        playlists: data.playlists.data.map(adaptPlaylist),
    };
};

export const musicAPI = {
    searchTracks,
    searchArtists,
    searchAlbums,
    searchPlaylists,
    searchAll,
    getArtist,
    getArtistTopTracks,
    getArtistAlbums,
    getArtistPlaylists,
    getArtistOverview,
    getAlbum,
    getPlaylist,
    getChart,
};

export default musicAPI;