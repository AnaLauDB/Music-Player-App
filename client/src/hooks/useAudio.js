import { useAppDispatch, useAppSelector } from "../redux/hooks";

import {
    selectCurrentTrack,
    selectIsPlaying,
    selectProgress,
    selectDuration,
    selectVolume,
} from "../redux/player";

import {
    setCurrentTrack,
    setVolume,
} from "../redux/player";

import { audioManager } from "../audio";

const useAudio = () => {

    const dispatch = useAppDispatch();

    const currentTrack = useAppSelector(selectCurrentTrack);

    const isPlaying = useAppSelector(selectIsPlaying);

    const progress = useAppSelector(selectProgress);

    const duration = useAppSelector(selectDuration);

    const volume = useAppSelector(selectVolume);

    const playTrack = (track) => {

        if (!track?.preview) return;

        // misma canción

        if (currentTrack?.id === track.id) {

            if (isPlaying) {

                audioManager.pause();

            } else {

                audioManager.resume();

            }

            return;

        }

        dispatch(setCurrentTrack(track));

    };

    const pauseTrack = () => {

        audioManager.pause();

    };

    const resumeTrack = () => {

        audioManager.resume();

    };

    const stopTrack = () => {

        audioManager.stop();

    };

    const seek = (time) => {

        audioManager.seek(time);

    };

    const changeVolume = (value) => {

        dispatch(setVolume(value));

        audioManager.setVolume(value);

    };

    return {

        currentTrack,

        isPlaying,

        progress,

        duration,

        volume,

        playTrack,

        pauseTrack,

        resumeTrack,

        stopTrack,

        seek,

        changeVolume,

    };

};

export default useAudio;