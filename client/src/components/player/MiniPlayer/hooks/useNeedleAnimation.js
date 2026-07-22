import { useEffect, useState } from "react";

import idle1 from "../../../../assets/animations/pink/needle-change/frame-1.png";
import idle2 from "../../../../assets/animations/pink/needle-change/frame-2.png";
import idle3 from "../../../../assets/animations/pink/needle-change/frame-3.png";

import play1 from "../../../../assets/animations/pink/needle-playing/frame-1.png";
import play2 from "../../../../assets/animations/pink/needle-playing/frame-2.png";
import play3 from "../../../../assets/animations/pink/needle-playing/frame-3.png";

const idleFrames = [
    idle1,
    idle2,
    idle3,
];

const playingFrames = [
    play1,
    play2,
    play3,
];

const useNeedleAnimation = (playing) => {

    const [frame, setFrame] = useState(
        idleFrames[0]
    );

    useEffect(() => {

        const frames = playing
            ? playingFrames
            : idleFrames;

        let index = 0;

        const interval = setInterval(() => {

            setFrame(frames[index]);

            index++;

            if (index >= frames.length) {

                clearInterval(interval);

            }

        }, 70);

        return () => clearInterval(interval);

    }, [playing]);

    return frame;

};

export default useNeedleAnimation;