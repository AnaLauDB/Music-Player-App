import axiosClient from "./client/axiosClient";
import { DEEZER_ENDPOINTS } from "./endpoints/deezerEndpoints";

import {
    adaptTrack,
    adaptArtist,
    adaptAlbum,
    adaptPlaylist,
} from "./adapters/musicAdapter";

/**
 * =====================================================
 * Función privada para realizar peticiones GET
 * =====================================================
 */
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
 * =====================================================
 * Buscar canciones
 * =====================================================
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
 * =====================================================
 * Buscar artistas
 * =====================================================
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
        if (!ids.has(artist.id)) {
            ids.add(artist.id);
            uniqueArtists.push(adaptArtist(artist));
        }
    });

    return uniqueArtists;
};

/**
 * =====================================================
 * Obtener información de un artista
 * =====================================================
 */
export const getArtist = async (artistId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.ARTIST}/${artistId}`,
    });

    return adaptArtist(data);
};

/**
 * =====================================================
 * Obtener un álbum
 * =====================================================
 */
export const getAlbum = async (albumId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.ALBUM}/${albumId}`,
    });

    return adaptAlbum(data);
};

/**
 * =====================================================
 * Obtener una playlist
 * =====================================================
 */
export const getPlaylist = async (playlistId) => {
    const data = await request({
        endpoint: `${DEEZER_ENDPOINTS.PLAYLIST}/${playlistId}`,
    });

    return adaptPlaylist(data);
};

/**
 * =====================================================
 * Obtener el Chart principal de Deezer
 * =====================================================
 */
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

/**
 * =====================================================
 * Servicio principal de música
 * =====================================================
 */
export const musicAPI = {
    searchTracks,
    searchArtists,
    getArtist,
    getAlbum,
    getPlaylist,
    getChart,
};

export default musicAPI;