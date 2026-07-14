import styles from "./TrackCover.module.css";

const TrackCover = ({ track }) => {
  return (
    <img
      className={styles.cover}
      src={track.cover}
      alt={track.title}
      loading="lazy"
    />
  );
};

export default TrackCover;
