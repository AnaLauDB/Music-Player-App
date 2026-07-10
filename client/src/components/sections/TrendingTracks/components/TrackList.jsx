import TrackRow from "./TrackRow";

import styles from "./TrackList.module.css";

const TrackList = ({ tracks, onPlay }) => {
  return (
    <div className={styles.list}>
      {tracks.slice(0, 10).map((track) => (
        <TrackRow key={track.id} track={track} onPlay={onPlay} />
      ))}
    </div>
  );
};

export default TrackList;
