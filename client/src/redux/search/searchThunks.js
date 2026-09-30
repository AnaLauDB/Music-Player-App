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
                error.message ||
                "Error al buscar canciones."
            );

        }
    }
);