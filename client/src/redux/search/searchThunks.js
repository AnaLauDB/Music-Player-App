import { createAsyncThunk } from "@reduxjs/toolkit";

import { musicAPI } from "../../api/musicApi";

export const searchTracks = createAsyncThunk(
    "search/searchTracks",

    async (query, thunkAPI) => {

        const normalizedQuery = query?.trim();

        if (!normalizedQuery) {
            return {
                tracks: [],
                artists: [],
                albums: [],
                playlists: [],
            };
        }

        try {

            const [
                tracks,
                artists,
            ] = await Promise.all([
                musicAPI.searchTracks(normalizedQuery),
                musicAPI.searchArtists(normalizedQuery),
            ]);

            return {
                tracks,
                artists,
                albums: [],
                playlists: [],
            };

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.message ||
                "Error al realizar la búsqueda."
            );

        }
    }
);