import formatDuration from "../../../../../../utils/formatDuration";

import useMiniPlayer from "../../../hooks/useMiniPlayer";

import styles from "../ProgressBar.module.css";

const TimeLabel = () => {
  const {
    progress,

    duration,
  } = useMiniPlayer();

  return (
    <>
      <div className={styles.timeLabels}>
        <span className={styles.current}>{formatDuration(progress)}</span>

        <span className={styles.total}>{formatDuration(duration)}</span>
      </div>
    </>
  );
};

export default TimeLabel;
