import { useAppSelector } from "../../../../../redux/hooks";

import { selectCurrentTrack } from "../../../../../redux/player";

import defaultCover from "../../../../../assets/animations/record-pink/frame-1.png";

import styles from "./AlbumCover.module.css";

const AlbumCover = () => {
  const currentTrack = useAppSelector(selectCurrentTrack);

  const cover = currentTrack?.cover || defaultCover;

  return (
    <img
      src={cover}
      alt={currentTrack?.title ?? "Album Cover"}
      className={styles.cover}
      draggable={false}
    />
  );
};

export default AlbumCover;
