import frame from "../../../../../assets/pink/frame.png";
import styles from "./Window.module.css";

const Window = ({ children }) => {
  return (
    <section className={styles.window}>
      <img
        src={frame}
        alt="Retro Window"
        className={styles.frame}
        draggable={false}
      />

      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Window;
