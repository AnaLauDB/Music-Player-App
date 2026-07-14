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
    play,
    pause,
    setVolume,
} from "../redux/player";

const useAudio = () => {

    const dispatch = useAppDispatch();

    const currentTrack = useAppSelector(selectCurrentTrack);

    const isPlaying = useAppSelector(selectIsPlaying);

    const progress = useAppSelector(selectProgress);

    const duration = useAppSelector(selectDuration);

    const volume = useAppSelector(selectVolume);

    /**
     * Reproducir una canción.
     */

    const playTrack = (track) => {

        dispatch(setCurrentTrack(track));

    };

    /**
     * Continuar reproducción.
     */

    const resume = () => {

        dispatch(play());

    };

    /**
     * Pausar.
     */

    const pauseTrack = () => {

        dispatch(pause());

    };

    /**
     * Cambiar volumen.
     */

    const changeVolume = (value) => {

        dispatch(setVolume(value));

    };

    return {

        currentTrack,

        isPlaying,

        progress,

        duration,

        volume,

        playTrack,

        resume,

        pauseTrack,

        changeVolume,

    };

};

export default useAudio;