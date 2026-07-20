import styles from "./TrackInfo.module.css";

const TrackInfo = ({ title, artist }) => {
  return (
    <div className={styles.info}>
      <h3>{title}</h3>

      <p>{artist}</p>
    </div>
  );
};

export default TrackInfo;
