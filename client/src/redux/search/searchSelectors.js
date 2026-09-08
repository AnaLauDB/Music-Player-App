export const selectSearchQuery = (state) =>
    state.search.query;

export const selectSearchResults = (state) =>
    state.search.results;

export const selectSearchTracks = (state) =>
    state.search.results.tracks;

export const selectSearchArtists = (state) =>
    state.search.results.artists;

export const selectSearchAlbums = (state) =>
    state.search.results.albums;

export const selectSearchPlaylists = (state) =>
    state.search.results.playlists;

export const selectSearchLoading = (state) =>
    state.search.loading;

export const selectSearchError = (state) =>
    state.search.error;