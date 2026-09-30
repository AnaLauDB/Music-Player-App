import { createSlice } from "@reduxjs/toolkit";

import searchInitialState from "./searchInitialState";

import { searchTracks } from "./searchThunks";

const searchSlice = createSlice({
    name: "search",

    initialState: searchInitialState,

    reducers: {

        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },

        clearSearchResults(state) {
            state.results = {
                tracks: [],
                artists: [],
                albums: [],
                playlists: [],
            };
        },

        clearSearch() {
            return searchInitialState;
        },
    },

    extraReducers: (builder) => {

        builder

            .addCase(searchTracks.pending, (state) => {

                state.loading = true;

                state.error = null;

            })

            .addCase(searchTracks.fulfilled, (state, action) => {

                state.loading = false;

                state.error = null;

                state.searchQuery = action.meta.arg;

                state.results.tracks = action.payload;

            })

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