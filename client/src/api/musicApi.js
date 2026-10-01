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

/**
 * Buscar canciones
 */
export const searchTracks = async (query) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.SEARCH,
        params: {
            q: query,
        },
    });

    return data.data.map(adaptTrack);
};

/**
 * Buscar artistas
 */
export const searchArtists = async (query) => {
    const data = await request({
        endpoint: DEEZER_ENDPOINTS.SEARCH,
        params: {
            q: `artist:"${query}"`,
        },
    });

    const uniqueArtists = [];
    const ids = new Set();

    data.data.forEach(({ artist }) => {
        if (artist && !ids.has(artist.id)) {
            ids.add(artist.id);
            uniqueArtists.push(adaptArtist(artist));
        }
    });

    return uniqueArtists;
};

/**
 * Buscar canciones y artistas en una sola consulta.
 * Deezer no admite filtros por album ni playlist, por lo que ambos
 * casos se derivan de la busqueda de pistas.
 */
export const searchAll = async (query) => {
    const [tracks, artists] = await Promise.all([
        searchTracks(query),
        searchArtists(query),
    ]);

    return {
        tracks,
        artists,
    };
};

export const getArtist = async (artistId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.ARTIST}/${artistId}`,
    });

    return adaptArtist(data);
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
    searchAll,
    getArtist,
    getAlbum,
    getPlaylist,
    getChart,
};

export default musicAPI;