import Button from "../../../common/Button";

import playIcon from "../../../../assets/icons/play.svg";

import styles from "./TrackActions.module.css";

const TrackActions = ({ onPlay }) => {
  return (
    <div className={styles.actions}>
      <Button onClick={onPlay} aria-label="Reproducir canción">
        <img src={playIcon} alt="Play" />
      </Button>
    </div>
  );
};

export default TrackActions;
