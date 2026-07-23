import next from "../../../../../../assets/icons/fast_forward.svg";

import ControlButton from "./ControlButton";

import useMiniPlayer from "../../../hooks/useMiniPlayer";

const NextButton = () => {
  const { nextTrack } = useMiniPlayer();

  return <ControlButton icon={next} alt="Next" onClick={nextTrack} />;
};

export default NextButton;
