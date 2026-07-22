import { useAppSelector } from "../../../../../redux/hooks";

import { selectIsPlaying } from "../../../../../redux/player";

import useNeedleAnimation from "../../hooks/useNeedleAnimation";

import styles from "./Needle.module.css";

const Needle = () => {
  const playing = useAppSelector(selectIsPlaying);

  const frame = useNeedleAnimation(playing);

  return (
    <img src={frame} alt="Needle" className={styles.needle} draggable={false} />
  );
};

export default Needle;
