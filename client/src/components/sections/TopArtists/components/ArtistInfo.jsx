import styles from "./ArtistInfo.module.css";

const ArtistInfo = ({ artist }) => {
  return (
    <div className={styles.info}>
      <h3>{artist.name}</h3>

      <p>
        {artist.fans
          ? `${artist.fans.toLocaleString()} fans`
          : "Sin información"}
      </p>
    </div>
  );
};

export default ArtistInfo;
