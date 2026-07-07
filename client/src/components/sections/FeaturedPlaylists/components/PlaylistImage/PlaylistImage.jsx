import styles from "./PlaylistImage.module.css";

function PlaylistImage({ src, alt }) {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default PlaylistImage;
