import Button from "../../../common/Button";

import playIcon from "../../../../assets/icons/play.svg";
import pauseIcon from "../../../../assets/icons/pause.svg";

import { useAppSelector } from "../../../../redux/hooks";

import { selectCurrentTrack, selectIsPlaying } from "../../../../redux/player";

import styles from "./TrackActions.module.css";

const TrackActions = ({ track, onPlay }) => {
  const currentTrack = useAppSelector(selectCurrentTrack);

  const isPlaying = useAppSelector(selectIsPlaying);

  const isCurrentTrack = currentTrack?.id === track.id;

  const icon = isCurrentTrack && isPlaying ? pauseIcon : playIcon;

  const label =
    isCurrentTrack && isPlaying ? "Pausar canción" : "Reproducir canción";

  return (
    <div className={styles.actions}>
      <Button onClick={onPlay} aria-label={label}>
        <img src={icon} alt={label} />
      </Button>
    </div>
  );
};

export default TrackActions;
