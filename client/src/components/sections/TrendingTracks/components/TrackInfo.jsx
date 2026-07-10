import styles from "./TrackInfo.module.css";

import formatDuration from "../../../../utils/formatDuration";

const TrackInfo = ({ title, artist, duration }) => {
  return (
    <div className={styles.info}>
      <div>
        <h3>{title}</h3>

        <p>{artist}</p>
      </div>

      <span className={styles.duration}>{formatDuration(duration)}</span>
    </div>
  );
};

export default TrackInfo;
