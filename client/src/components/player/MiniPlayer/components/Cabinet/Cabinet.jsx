import cabinet from "../../../../../assets/pink/record_player.png";

import styles from "./Cabinet.module.css";

const Cabinet = ({ children }) => {
  return (
    <div className={styles.container}>
      <img src={cabinet} alt="Retro Turntable" className={styles.image} />

      <div className={styles.layers}>{children}</div>
    </div>
  );
};

export default Cabinet;
