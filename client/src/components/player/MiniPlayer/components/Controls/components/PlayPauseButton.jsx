import play from "../../../../../../assets/icons/play_circle.svg";
import pause from "../../../../../../assets/icons/pause_circle.svg";

import ControlButton from "./ControlButton";

import useMiniPlayer from "../../../hooks/useMiniPlayer";

const PlayPauseButton = () => {
  const { isPlaying, togglePlayPause } = useMiniPlayer();

  return (
    <ControlButton
      icon={isPlaying ? pause : play}
      alt="Play Pause"
      onClick={togglePlayPause}
    />
  );
};

export default PlayPauseButton;
