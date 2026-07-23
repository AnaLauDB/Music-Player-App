import useAudio from "../../../../hooks/useAudio";

import {
    nextTrack,
    previousTrack,
} from "../../../../redux/player";

import {
    useAppDispatch,
} from "../../../../redux/hooks";

const useMiniPlayer = () => {

    const dispatch = useAppDispatch();

    const {
        currentTrack,
        isPlaying,
        playTrack,
        pauseTrack,
        resume,
        progress,
        duration,
        volume,
        changeVolume,
    } = useAudio();

    const togglePlayPause = () => {

        if (!currentTrack) return;

        if (isPlaying) {

            pauseTrack();

        } else {

            playTrack(currentTrack)

        }

    };

    const playNextTrack = () => {

        dispatch(nextTrack());

    };

    const playPreviousTrack = () => {

        dispatch(previousTrack());

    };

    return {

        currentTrack,

        isPlaying,

        progress,

        duration,

        volume,

        changeVolume,

        togglePlayPause,

        nextTrack: playNextTrack,

        previousTrack: playPreviousTrack,

        playTrack,

    };

};

export default useMiniPlayer;