import { useAppSelector } from "../../../../../../redux/hooks";
import { selectCurrentTrack } from "../../../../../../redux/player";

import icon from "../../../../../../assets/icons/artist.png";

import styles from "./AlbumCover.module.css";

const AlbumCover = () => {
  const currentTrack = useAppSelector(selectCurrentTrack);

  return (
    <img
      src={currentTrack?.cover || icon}
      alt={currentTrack?.title || "Album"}
      className={styles.cover}
      draggable={false}
    />
  );
};

export default AlbumCover;
