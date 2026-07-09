import ArtistAvatar from "./ArtistAvatar";
import ArtistInfo from "./ArtistInfo";

import styles from "./ArtistCard.module.css";

const ArtistCard = ({ artist }) => {
  return (
    <article className={styles.card}>
      <ArtistAvatar artist={artist} />

      <ArtistInfo artist={artist} />
    </article>
  );
};

export default ArtistCard;
