import ArtistCard from "./ArtistCard";

import styles from "./ArtistGrid.module.css";

function ArtistGrid({ artists }) {
  return (
    <div className={styles.grid}>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default ArtistGrid;
