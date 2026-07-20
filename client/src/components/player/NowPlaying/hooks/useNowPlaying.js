import { useAppSelector } from "../../../../redux/hooks";

import {
    selectCurrentTrack,
    selectIsPlaying,
} from "../../../../redux/player";

const useNowPlaying = () => {

    const track = useAppSelector(selectCurrentTrack);

    const isPlaying = useAppSelector(selectIsPlaying);

    return {

        track,

        isPlaying,

        hasTrack: !!track,

    };

};

export default useNowPlaying;