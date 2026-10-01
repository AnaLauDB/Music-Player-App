import SectionTitle from "../../../common/SectionTittle";
import PlaylistCard from "../../FeaturedPlaylists/components/PlaylistCard";

import styles from "./AlbumResults.module.css";

const PlaylistResults = ({ playlists }) => {
    if (!playlists.length) {
        return (
            <p className={styles.empty}>No se encontraron playlists.</p>
        );
    }

    return (
        <div className={styles.wrapper}>
            <SectionTitle
                icon="🎵"
                title="Playlists"
                subtitle={`${playlists.length} coincidencias`}
            />

            <div className={styles.grid}>
                {playlists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    );
};

export default PlaylistResults;
