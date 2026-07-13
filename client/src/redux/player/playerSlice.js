import { createSlice } from "@reduxjs/toolkit";

import playerInitialState from "./playerInitialState";

const playerSlice = createSlice({
    name: "player",

    initialState: playerInitialState,

    reducers: {
        setCurrentTrack(state, action) {
            state.currentTrack = action.payload;
            state.progress = 0;
            state.duration = action.payload?.duration ?? 0;
            state.isPlaying = true;
        },

        play(state) {
            state.isPlaying = true;
        },

        pause(state) {
            state.isPlaying = false;
        },

        setProgress(state, action) {
            state.progress = action.payload;
        },

        setDuration(state, action) {
            state.duration = action.payload;
        },

        setVolume(state, action) {
            state.volume = action.payload;
        },

        toggleMute(state) {
            state.muted = !state.muted;
        },

        toggleRepeat(state) {
            state.repeat = !state.repeat;
        },

        toggleShuffle(state) {
            state.shuffle = !state.shuffle;
        },

        setQueue(state, action) {
            state.queue = action.payload;
            state.currentIndex = 0;
        },

        nextTrack(state) {
            if (state.currentIndex >= state.queue.length - 1) return;

            state.currentIndex++;

            state.currentTrack = state.queue[state.currentIndex];

            state.progress = 0;

            state.duration = state.currentTrack?.duration ?? 0;
        },

        previousTrack(state) {
            if (state.currentIndex <= 0) return;

            state.currentIndex--;

            state.currentTrack = state.queue[state.currentIndex];

            state.progress = 0;

            state.duration = state.currentTrack?.duration ?? 0;
        },

        setLoading(state, action) {
            state.isLoading = action.payload;
        },

        setError(state, action) {
            state.error = action.payload;
        },

        resetPlayer() {
            return playerInitialState;
        },
    },
});

export const {
    setCurrentTrack,
    play,
    pause,
    setProgress,
    setDuration,
    setVolume,
    toggleMute,
    toggleRepeat,
    toggleShuffle,
    setQueue,
    nextTrack,
    previousTrack,
    setLoading,
    setError,
    resetPlayer,
} = playerSlice.actions;

export default playerSlice.reducer;