import PlaylistImage from "../PlaylistImage";
import PlaylistInfo from "../PlaylistInfo";

import styles from "./PlaylistCard.module.css";

function PlaylistCard({ playlist }) {
  return (
    <article className={styles.card}>
      <a
        className={styles.link}
        href={playlist.link}
        target="_blank"
        rel="noreferrer"
      >
        <PlaylistImage src={playlist.picture} alt={playlist.title} />
        <PlaylistInfo title={playlist.title} tracks={playlist.tracks} />
      </a>
    </article>
  );
}

export default PlaylistCard;
