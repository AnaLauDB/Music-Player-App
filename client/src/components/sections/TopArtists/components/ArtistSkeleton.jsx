import Skeleton from "../../../common/Skeleton";

import styles from "./ArtistSkeleton.module.css";

const ArtistSkeleton = () => {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} height="260px" />
      ))}
    </div>
  );
};

export default ArtistSkeleton;
