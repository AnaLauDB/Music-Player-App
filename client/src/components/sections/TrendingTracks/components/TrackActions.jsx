import Button from "../../../common/Button";

import play from "../../../../assets/icons/play.svg";

import styles from "./TrackActions.module.css";

const TrackActions = ({ track, onPlay }) => {
  return (
    <div className={styles.actions}>
      <Button onClick={() => onPlay?.(track)}>
        <img
          src={play}
          alt={`Reproducir ${track.title}`}
          className={styles.icon}
        />
      </Button>
    </div>
  );
};

export default TrackActions;
