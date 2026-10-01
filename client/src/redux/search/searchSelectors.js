export const selectSearchQuery = (state) =>
    state.search.searchQuery;

export const selectSubmittedQuery = (state) =>
    state.search.submittedQuery;

export const selectSearchIntent = (state) => state.search.intent;

export const selectHasSearch = (state) => Boolean(state.search.submittedQuery);

export const selectSearchArtist = (state) => state.search.artist;

export const selectArtistTopTracks = (state) =>
    state.search.artistTopTracks;

export const selectArtistAlbums = (state) => state.search.artistAlbums;

export const selectArtistPlaylists = (state) =>
    state.search.artistPlaylists;

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