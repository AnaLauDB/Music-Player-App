import ArtistCard from "./ArtistCard";

import styles from "./ArtistGrid.module.css";

const ArtistGrid = ({ artists }) => {
  return (
    <div className={styles.grid}>
      {artists.slice(0, 8).map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistGrid;
