import PlaylistCard from "../PlaylistCard";

import styles from "./PlaylistGrid.module.css";

function PlaylistGrid({ playlists }) {
  return (
    <div className={styles.grid}>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}

export default PlaylistGrid;
