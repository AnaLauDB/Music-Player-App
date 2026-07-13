export const selectCurrentTrack = (state) => state.player.currentTrack;

export const selectIsPlaying = (state) => state.player.isPlaying;

export const selectProgress = (state) => state.player.progress;

export const selectDuration = (state) => state.player.duration;

export const selectVolume = (state) => state.player.volume;

export const selectQueue = (state) => state.player.queue;

export const selectCurrentIndex = (state) => state.player.currentIndex;

export const selectMuted = (state) => state.player.muted;

export const selectRepeat = (state) => state.player.repeat;

export const selectShuffle = (state) => state.player.shuffle;

export const selectPlayerLoading = (state) => state.player.isLoading;

export const selectPlayerError = (state) => state.player.error;