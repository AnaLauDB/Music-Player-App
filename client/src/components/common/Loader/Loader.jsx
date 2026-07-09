import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div></div>

      <p>Cargando...</p>
    </div>
  );
};

export default Loader;
