import TrackCover from "./TrackCover";
import TrackInfo from "./TrackInfo";
import TrackActions from "./TrackActions";

import styles from "./TrackRow.module.css";

const TrackRow = ({ track, onPlay }) => {
  return (
    <article className={styles.row}>
      <TrackCover cover={track.cover} title={track.title} />

      <TrackInfo
        title={track.title}
        artist={track.artist}
        duration={track.duration}
      />

      <TrackActions track={track} onPlay={onPlay} />
    </article>
  );
};

export default TrackRow;
