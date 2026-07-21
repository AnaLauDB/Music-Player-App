import { useEffect, useState } from "react";

import frame1 from "../../../../assets/animations/record-pink/frame-1.png";
import frame2 from "../../../../assets/animations/record-pink/frame-2.png";
import frame3 from "../../../../assets/animations/record-pink/frame-3.png";
import frame4 from "../../../../assets/animations/record-pink/frame-4.png";

const frames = [
  frame1,
  frame2,
  frame3,
  frame4,
];

const useVinylAnimation = (playing = true) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      setFrame((previous) => (previous + 1) % frames.length);
    }, 90);

    return () => clearInterval(interval);
  }, [playing]);

  return frames[frame];
};

export default useVinylAnimation;