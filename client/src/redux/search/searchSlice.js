import { createSlice } from "@reduxjs/toolkit";

import searchInitialState from "./searchInitialState";

import {
    searchAll,
    searchTracks,
    searchArtists,
    fetchArtistOverview,
} from "./searchThunks";

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
            state.artist = null;
            state.artistTopTracks = [];
            state.artistAlbums = [];
            state.artistPlaylists = [];
            state.error = null;
        },

        clearSearch() {
            return searchInitialState;
        },
    },

    extraReducers: (builder) => {
        builder
            // searchAll
            .addCase(searchAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchAll.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.searchQuery = action.meta.arg;
                state.submittedQuery = action.payload.query;
                state.intent = action.payload.intent;
                state.results = {
                    tracks: action.payload.tracks,
                    artists: action.payload.artists,
                    albums: action.payload.albums,
                    playlists: action.payload.playlists,
                };
                state.artist = action.payload.artist;
                state.artistTopTracks = action.payload.artistTopTracks;
                state.artistAlbums = action.payload.artistAlbums;
                state.artistPlaylists = action.payload.artistPlaylists;
                state.results.artists = action.payload.artists;
            })
            .addCase(searchAll.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "No se pudo realizar la búsqueda.";
            })

            // fetchArtistOverview
            .addCase(fetchArtistOverview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArtistOverview.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.artist = action.payload.artist;
                state.artistTopTracks = action.payload.topTracks;
                state.artistAlbums = action.payload.albums;
                state.artistPlaylists = action.payload.playlists;
                state.results.playlists = action.payload.playlists;
            })
            .addCase(fetchArtistOverview.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "No se pudo cargar el artista.";
            })

            // searchTracks
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
                    action.payload || "No se pudo realizar la búsqueda.";
            })

            // searchArtists
            .addCase(searchArtists.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchArtists.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.searchQuery = action.meta.arg;
                state.submittedQuery = action.meta.arg;
                state.results.artists = action.payload;
            })
            .addCase(searchArtists.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "No se pudo realizar la búsqueda.";
            });
    },
});

export const {
    setSearchQuery,
    clearSearchResults,
    clearSearch,
} = searchSlice.actions;

export default searchSlice.reducer;