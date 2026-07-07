import styles from "./PlaylistInfo.module.css";

function PlaylistInfo({ title, tracks }) {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.tracks}>{tracks} canciones</p>
    </div>
  );
}

export default PlaylistInfo;
