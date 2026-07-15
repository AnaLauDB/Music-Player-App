/**
 * ==========================================
 * Selectores del reproductor
 * ==========================================
 */

/**
 * Canción actualmente seleccionada.
 */
export const selectCurrentTrack = (state) =>
  state.player.currentTrack;

/**
 * Estado de reproducción.
 */
export const selectIsPlaying = (state) =>
  state.player.isPlaying;

/**
 * Tiempo actual.
 */
export const selectProgress = (state) =>
  state.player.progress;

/**
 * Duración de la canción.
 */
export const selectDuration = (state) =>
  state.player.duration;

/**
 * Volumen.
 */
export const selectVolume = (state) =>
  state.player.volume;

/**
 * Estado de mute.
 */
export const selectMuted = (state) =>
  state.player.muted;