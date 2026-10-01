import { createAsyncThunk } from "@reduxjs/toolkit";

import { musicAPI } from "../../api/musicApi";

export const searchTracks = createAsyncThunk(
    "search/searchTracks",

    async (query, thunkAPI) => {
        try {
            const tracks = await musicAPI.searchTracks(query);

            return tracks;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.message || "Error al buscar canciones."
            );
        }
    }
);

export const searchArtists = createAsyncThunk(
    "search/searchArtists",

    async (query, thunkAPI) => {
        try {
            const artists = await musicAPI.searchArtists(query);

            return artists;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.message || "Error al buscar artistas."
            );
        }
    }
);

/**
 * Carga el detalle completo de un artista: canciones populares,
 * discografia y playlists donde aparece.
 */
export const fetchArtistOverview = createAsyncThunk(
    "search/fetchArtistOverview",

    async (artistId, thunkAPI) => {
        try {
            const overview = await musicAPI.getArtistOverview(artistId);

            return overview;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.message || "No se pudo cargar el artista."
            );
        }
    }
);

export const searchAll = createAsyncThunk(
    "search/searchAll",

    async (query, thunkAPI) => {
        try {
            const results = await musicAPI.searchAll(query);

            return results;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.message || "No se pudo realizar la búsqueda."
            );
        }
    }
);
