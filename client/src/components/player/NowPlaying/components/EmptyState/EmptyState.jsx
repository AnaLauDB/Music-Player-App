import styles from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <div className={styles.empty}>
      <span className={styles.icon}>♪</span>

      <h3>No hay música reproduciéndose</h3>

      <p>Selecciona una canción</p>
    </div>
  );
};

export default EmptyState;
