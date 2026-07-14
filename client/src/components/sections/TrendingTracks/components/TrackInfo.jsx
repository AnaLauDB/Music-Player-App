import styles from "./TrackInfo.module.css";

import formatDuration from "../../../../utils/formatDuration";

const TrackInfo = ({ track }) => {
  return (
    <div className={styles.info}>
      <div className={styles.text}>
        <h3>{track.title}</h3>

        <p>{track.artist}</p>
      </div>

      <span className={styles.duration}>{formatDuration(track.duration)}</span>
    </div>
  );
};

export default TrackInfo;
