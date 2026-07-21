import Window from "./components/Window";
import Cabinet from "./components/Cabinet";

import styles from "./MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <section className={styles.player}>
      <Window>
        <Cabinet />
      </Window>
    </section>
  );
};

export default MiniPlayer;
