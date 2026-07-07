import styles from "./PlaylistSkeleton.module.css";

function PlaylistSkeleton() {
  return (
    <article className={styles.card}>
      <div className={styles.cover} />
      <div className={styles.line} />
      <div className={styles.lineSmall} />
    </article>
  );
}

export default PlaylistSkeleton;
