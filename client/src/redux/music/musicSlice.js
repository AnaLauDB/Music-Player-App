import { fetchChart } from "./musicThunks";
import { createSlice } from "@reduxjs/toolkit";
import musicInitialState from "./musicInitialState";

const musicSlice = createSlice({
    name: "music",

    initialState: musicInitialState,

    reducers: {
        /**
         * Actualiza el texto de búsqueda.
         */
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },

        /**
         * Limpia cualquier error.
         */
        clearError(state) {
            state.error = null;
        },

        /**
         * Reinicia el estado del módulo de música.
         */
        clearMusic() {
            return musicInitialState;
        },
    },

    extraReducers: (builder) => {

    builder

        .addCase(fetchChart.pending, (state) => {

            state.loading = true;

            state.error = null;

        })

        .addCase(fetchChart.fulfilled, (state, action) => {

            state.loading = false;

            state.tracks = action.payload.tracks;

            state.artists = action.payload.artists;

            state.playlists = action.payload.playlists;

        })

        .addCase(fetchChart.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload;

        });

},
});

export const {
    setSearchQuery,
    clearError,
    clearMusic,
} = musicSlice.actions;

export default musicSlice.reducer;