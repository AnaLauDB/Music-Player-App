import { createAsyncThunk } from "@reduxjs/toolkit";

import { musicAPI } from "../../api/musicApi";

/**
 * =====================================================
 * Obtener el contenido principal de Deezer.
 * =====================================================
 *
 * Descarga:
 * - Tracks destacados
 * - Artistas destacados
 * - Playlists destacadas
 */
export const fetchChart = createAsyncThunk(
    "music/fetchChart",

    async (_, thunkAPI) => {
        try {
            const chart = await musicAPI.getChart();

            return chart;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.message || "Error al obtener el chart."
            );
        }
    }
);