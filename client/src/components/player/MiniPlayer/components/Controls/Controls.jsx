import PreviousButton from "./components/PreviousButton";
import PlayPauseButton from "./components/PlayPauseButton";
import NextButton from "./components/NextButton";

import styles from "./Controls.module.css";

const Controls = () => {
  return (
    <div className={styles.controls}>
      <PreviousButton />

      <PlayPauseButton />

      <NextButton />
    </div>
  );
};

export default Controls;
