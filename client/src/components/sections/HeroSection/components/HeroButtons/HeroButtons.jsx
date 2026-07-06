import styles from "./HeroButtons.module.css";

function HeroButtons() {
  return (
    <div className={styles.buttons}>
      <button className={styles.primary}>Explore Music</button>

      <button className={styles.secondary}>Trending Artists</button>
    </div>
  );
}

export default HeroButtons;
