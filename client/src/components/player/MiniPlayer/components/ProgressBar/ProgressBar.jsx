import TimeLabel from "./components/TimeLabel";

import progressBar from "../../../../../assets/pink/progress_bar.png";

import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.container}>
      <img
        src={progressBar}
        alt=""
        className={styles.background}
        draggable={false}
      />

      <TimeLabel />
    </div>
  );
};

export default ProgressBar;
