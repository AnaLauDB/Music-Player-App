import Window from "./components/Window";
import Cabinet from "./components/Cabinet";

import styles from "./MiniPlayer.module.css";
import NowPlayingCard from "./components/NowPlayingCard";
import Controls from "./components/Controls";

const MiniPlayer = () => {
  return (
    <section className={styles.player}>
      <Window>
        <Cabinet />

        <NowPlayingCard />

        <Controls />
      </Window>
    </section>
  );
};

export default MiniPlayer;
