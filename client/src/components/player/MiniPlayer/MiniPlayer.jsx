import Turntable from "./components/Turntable";

import styles from "./MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <aside className={styles.player}>
      <Turntable />
    </aside>
  );
};

export default MiniPlayer;
