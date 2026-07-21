import cabinet from "../../../../../assets/pink/record_player.png";
import Vinyl from "../Vinyl";
import styles from "./Cabinet.module.css";

const Cabinet = ({ children }) => {
  return (
    <div className={styles.cabinet}>
      <img
        src={cabinet}
        alt="Record Player"
        className={styles.image}
        draggable={false}
      />

      <div className={styles.layers}>
        <Vinyl />

        {children}
      </div>
    </div>
  );
};

export default Cabinet;
