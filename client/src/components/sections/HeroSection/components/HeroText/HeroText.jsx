import styles from "./HeroText.module.css";

function HeroText() {
  return (
    <>
      <span className={styles.badge}>🎵 Pixel Music Dashboard</span>

      <h1 className={styles.title}>Discover your next favorite song</h1>

      <p className={styles.description}>
        Search artists, albums and playlists with a beautiful pixel inspired
        interface powered by Deezer.
      </p>
    </>
  );
}

export default HeroText;
