import Skeleton from "../../../common/Skeleton";

import styles from "./TrackSkeleton.module.css";

const TrackSkeleton = () => {
  return (
    <div className={styles.list}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className={styles.row}>
          <Skeleton width="72px" height="72px" borderRadius="16px" />

          <Skeleton height="52px" />

          <Skeleton width="60px" height="44px" />
        </div>
      ))}
    </div>
  );
};

export default TrackSkeleton;
