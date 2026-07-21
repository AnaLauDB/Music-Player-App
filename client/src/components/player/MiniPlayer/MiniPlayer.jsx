import Cabinet from "./components/Cabinet";

import styles from "./MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <section className={styles.player}>
      <Cabinet />
    </section>
  );
};

export default MiniPlayer;
