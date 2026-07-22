import Window from "./components/Window";
import Cabinet from "./components/Cabinet";

import styles from "./MiniPlayer.module.css";
import NowPlayingCard from "./components/NowPlayingCard";

const MiniPlayer = () => {
  return (
    <section className={styles.player}>
      <Window>
        <Cabinet />

        <NowPlayingCard />
      </Window>
    </section>
  );
};

export default MiniPlayer;
