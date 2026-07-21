import useVinylAnimation from "../../hooks/useVinylAnimation";

import styles from "./Vinyl.module.css";

const Vinyl = () => {
  const frame = useVinylAnimation(true);

  return (
    <img
      src={frame}
      alt="Vinyl Record"
      className={styles.vinyl}
      draggable={false}
    />
  );
};

export default Vinyl;
