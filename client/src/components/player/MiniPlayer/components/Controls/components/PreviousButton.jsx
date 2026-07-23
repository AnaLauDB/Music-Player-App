import previous from "../../../../../../assets/icons/fast_rewind.svg";

import ControlButton from "./ControlButton";

import useMiniPlayer from "../../../hooks/useMiniPlayer";

const PreviousButton = () => {
  const { previousTrack } = useMiniPlayer();

  return (
    <ControlButton icon={previous} alt="Previous" onClick={previousTrack} />
  );
};

export default PreviousButton;
