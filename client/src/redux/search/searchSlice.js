import { createSlice } from "@reduxjs/toolkit";

import searchInitialState from "./searchInitialState";

import { searchTracks } from "./searchThunks";

const searchSlice = createSlice({
    name: "search",

    initialState: searchInitialState,

    reducers: {

        /**
         * Actualiza la búsqueda actual.
         */
        setSearchQuery(state, action) {
            state.query = action.payload;
        },

        /**
         * Limpia únicamente los resultados.
         */
        clearSearchResults(state) {
            state.results = {
                tracks: [],
                artists: [],
                albums: [],
                playlists: [],
            };
        },

        /**
         * Reinicia completamente el módulo de búsqueda.
         */
        clearSearch() {
            return searchInitialState;
        },
    },

    extraReducers: (builder) => {

        builder

            /**
             * Búsqueda en proceso.
             */
            .addCase(searchTracks.pending, (state) => {

                state.loading = true;

                state.error = null;

            })

            /**
             * Búsqueda completada.
             */
            .addCase(searchTracks.fulfilled, (state, action) => {

                state.loading = false;

                state.error = null;

                state.query = action.meta.arg;

                state.results = action.payload;

            })

            /**
             * Búsqueda fallida.
             */
            .addCase(searchTracks.rejected, (state, action) => {

                state.loading = false;

                state.error =
                    action.payload ||
                    "No se pudo realizar la búsqueda.";

            });
    },
});

export const {
    setSearchQuery,
    clearSearchResults,
    clearSearch,
} = searchSlice.actions;

export default searchSlice.reducer;