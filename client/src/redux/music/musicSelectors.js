/**
 * ===============================
 * Selectores del módulo Music
 * ===============================
 */

/**
 * Canciones en tendencia.
 */
export const selectTrendingTracks = (state) =>
    state.music.tracks;

/**
 * Alias para mantener compatibilidad.
 */
export const selectTracks = selectTrendingTracks;

/**
 * Artistas.
 */
export const selectArtists = (state) =>
    state.music.artists;

/**
 * Playlists.
 */
export const selectPlaylists = (state) =>
    state.music.playlists;

/**
 * Estado de carga.
 */
export const selectMusicLoading = (state) =>
    state.music.loading;

/**
 * Alias para mantener compatibilidad.
 */
export const selectLoading = selectMusicLoading;

/**
 * Error.
 */
export const selectMusicError = (state) =>
    state.music.error;

/**
 * Alias para mantener compatibilidad.
 */
export const selectError = selectMusicError;

/**
 * Texto de búsqueda.
 */
export const selectSearchQuery = (state) =>
    state.music.searchQuery;

/**
 * Artista seleccionado.
 */
export const selectSelectedArtist = (state) =>
    state.music.selectedArtist;

/**
 * Álbum seleccionado.
 */
export const selectSelectedAlbum = (state) =>
    state.music.selectedAlbum;