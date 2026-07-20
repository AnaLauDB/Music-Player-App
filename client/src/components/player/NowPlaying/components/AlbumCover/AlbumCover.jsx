import styles from "./AlbumCover.module.css";

const AlbumCover = ({ cover, title }) => {
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
    </div>
  );
};

export default AlbumCover;
