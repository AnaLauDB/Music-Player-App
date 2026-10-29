import axiosClient from "./client/axiosClient";
import { MUSIC_ENDPOINTS } from "./endpoints/musicEndpoints";

const request = async (endpoint, params) => {
    try {
        const response = await axiosClient.get(endpoint, {
            params,
        });

        return response.data;
    } catch (error) {
        const message =
            error.response?.data?.message ||
            error.message ||
            "No se pudo consultar el servidor.";

        console.error("Music API Error:", message);

        throw new Error(message, { cause: error });
    }
};

/**
 * Busca canciones por texto libre.
 */
export const searchTracks = (query) =>
    request(MUSIC_ENDPOINTS.SEARCH_TRACKS, { q: query });

/**
 * Busca artistas.
 */
export const searchArtists = (query) =>
    request(MUSIC_ENDPOINTS.SEARCH_ARTISTS, { q: query });

/**
 * Busca álbumes.
 */
export const searchAlbums = (query) =>
    request(MUSIC_ENDPOINTS.SEARCH_ALBUMS, { q: query });

/**
 * Busca playlists.
 */
export const searchPlaylists = (query) =>
    request(MUSIC_ENDPOINTS.SEARCH_PLAYLISTS, { q: query });

/**
 * Consulta las cuatro categorías y devuelve la vista detectada
 * junto con el detalle del artista cuando corresponde.
 */
export const searchAll = (query) =>
    request(MUSIC_ENDPOINTS.SEARCH, { q: query });

export const getArtist = (artistId) =>
    request(MUSIC_ENDPOINTS.ARTIST(artistId));

export const getArtistTopTracks = (artistId) =>
    request(MUSIC_ENDPOINTS.ARTIST_TOP_TRACKS(artistId));

export const getArtistAlbums = (artistId) =>
    request(MUSIC_ENDPOINTS.ARTIST_ALBUMS(artistId));

export const getArtistPlaylists = (artistId) =>
    request(MUSIC_ENDPOINTS.ARTIST_PLAYLISTS(artistId));

export const getArtistOverview = (artistId) =>
    request(MUSIC_ENDPOINTS.ARTIST_OVERVIEW(artistId));

export const getAlbum = (albumId) =>
    request(MUSIC_ENDPOINTS.ALBUM(albumId));

export const getPlaylist = (playlistId) =>
    request(MUSIC_ENDPOINTS.PLAYLIST(playlistId));

export const getChart = () => request(MUSIC_ENDPOINTS.CHART);

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
