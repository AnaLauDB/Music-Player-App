import styles from "./PlaybackStatus.module.css";

const PlaybackStatus = ({ isPlaying }) => {
  return (
    <div className={styles.status}>
      <span
        className={`${styles.dot} ${
          isPlaying ? styles.playing : styles.paused
        }`}
      />

      <span>{isPlaying ? "Reproduciendo" : "Pausado"}</span>
    </div>
  );
};

export default PlaybackStatus;
