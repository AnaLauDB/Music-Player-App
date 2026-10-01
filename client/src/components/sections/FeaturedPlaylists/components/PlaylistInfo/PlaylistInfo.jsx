import styles from "./PlaylistInfo.module.css";

function PlaylistInfo({ title, tracks }) {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>

      {/* Deezer no devuelve nb_tracks en algunos listados. */}
      {tracks ? <p className={styles.tracks}>{tracks} canciones</p> : null}
    </div>
  );
}

export default PlaylistInfo;
