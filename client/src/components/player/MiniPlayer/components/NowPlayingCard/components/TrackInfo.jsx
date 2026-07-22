import { useAppSelector } from "../../../../../../redux/hooks";

import { selectCurrentTrack } from "../../../../../../redux/player";

import styles from "./TrackInfo.module.css";

const TrackInfo = () => {
  const track = useAppSelector(selectCurrentTrack);

  return (
    <div className={styles.info}>
      <h4>{track?.title || "Nothing Playing"}</h4>

      <p>{track?.artist || "Choose a song"}</p>
    </div>
  );
};

export default TrackInfo;
