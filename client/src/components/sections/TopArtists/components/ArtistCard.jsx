import styles from "./ArtistCard.module.css";

function ArtistCard({ artist }) {
  return (
    <article className={styles.card}>
      <button className={styles.button}>
        <img
          className={styles.image}
          src={artist.picture_medium || artist.picture}
          alt={artist.name}
        />

        <span className={styles.name}>{artist.name}</span>
      </button>
    </article>
  );
}

export default ArtistCard;
