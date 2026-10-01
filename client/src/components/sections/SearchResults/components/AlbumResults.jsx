import SectionTitle from "../../../common/SectionTittle";
import PlaylistCard from "../../FeaturedPlaylists/components/PlaylistCard";
import TrackRow from "../../TrendingTracks/components/TrackRow";

import styles from "./AlbumResults.module.css";

const AlbumResults = ({ albums, tracks, onPlay }) => {
    if (!albums.length) {
        return (
            <p className={styles.empty}>No se encontraron álbumes.</p>
        );
    }

    return (
        <div className={styles.wrapper}>
            <SectionTitle
                icon="💿"
                title="Álbumes"
                subtitle={`${albums.length} coincidencias`}
            />

            <div className={styles.grid}>
                {albums.map((album) => (
                    <PlaylistCard
                        key={album.id}
                        playlist={{
                            id: album.id,
                            title: album.title,
                            picture: album.cover,
                            tracks: album.tracks,
                            link: album.link,
                        }}
                    />
                ))}
            </div>

            {!!tracks.length && (
                <>
                    <SectionTitle
                        title="Canciones encontradas"
                        subtitle="Títulos relacionados"
                    />

                    <div className={styles.list}>
                        {tracks.map((track) => (
                            <TrackRow
                                key={track.id}
                                track={track}
                                onPlay={onPlay}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AlbumResults;
