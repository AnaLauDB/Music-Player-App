import Window from "./components/Window";
import Cabinet from "./components/Cabinet";

import styles from "./MiniPlayer.module.css";
import NowPlayingCard from "./components/NowPlayingCard";
import Controls from "./components/Controls";
import ProgressBar from "./components/ProgressBar";

const MiniPlayer = () => {
  return (
    <section className={styles.player}>
      <Window>
        <Cabinet />

        <NowPlayingCard />

        <Controls />

        <ProgressBar />
      </Window>
    </section>
  );
};

export default MiniPlayer;
