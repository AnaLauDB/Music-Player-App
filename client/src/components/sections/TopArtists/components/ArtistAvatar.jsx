import styles from "./ArtistAvatar.module.css";

const ArtistAvatar = ({ artist }) => {
  return (
    <img
      src={artist.picture || "/images/default-artist.png"}
      alt={artist.name}
    />
  );
};

export default ArtistAvatar;
