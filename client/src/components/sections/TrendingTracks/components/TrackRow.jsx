import TrackCover from "./TrackCover";
import TrackInfo from "./TrackInfo";
import TrackActions from "./TrackActions";

import styles from "./TrackRow.module.css";

const TrackRow = ({ track, onPlay }) => {
  return (
    <article className={styles.row}>
      <TrackCover track={track} />

      <TrackInfo track={track} />

      <TrackActions onPlay={() => onPlay(track)} />
    </article>
  );
};

export default TrackRow;
