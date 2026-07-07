/**
 * ===============================
 * Selectores del módulo Music
 * ===============================
 */

export const selectTracks = (state) =>
    state.music.tracks;

export const selectArtists = (state) =>
    state.music.artists;

export const selectPlaylists = (state) =>
    state.music.playlists;

export const selectLoading = (state) =>
    state.music.loading;

export const selectError = (state) =>
    state.music.error;

export const selectSearchQuery = (state) =>
    state.music.searchQuery;

export const selectSelectedArtist = (state) =>
    state.music.selectedArtist;

export const selectSelectedAlbum = (state) =>
    state.music.selectedAlbum;