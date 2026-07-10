import styles from "./TrackCover.module.css";

const TrackCover = ({ cover, title }) => {
  return <img className={styles.cover} src={cover} alt={title} />;
};

export default TrackCover;
