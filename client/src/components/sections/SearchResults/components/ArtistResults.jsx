import SectionTitle from "../../../common/SectionTittle";

import TrackRow from "../../TrendingTracks/components/TrackRow";
import PlaylistCard from "../../FeaturedPlaylists/components/PlaylistCard";

import styles from "./ArtistResults.module.css";

const ArtistResults = ({ artist, topTracks, albums, playlists, onPlay }) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.hero}>
                <img
                    className={styles.avatar}
                    src={artist.picture}
                    alt={artist.name}
                    loading="lazy"
                />

                <div className={styles.heroText}>
                    <span className={styles.badge}>Artista</span>

                    <h3 className={styles.name}>{artist.name}</h3>

                    {artist.fans > 0 && (
                        <p className={styles.fans}>
                            {artist.fans.toLocaleString("es-ES")} oyentes
                        </p>
                    )}
                </div>
            </header>

            <section className={styles.block}>
                <SectionTitle
                    icon="🔥"
                    title="Canciones populares"
                    subtitle="Los temas más escuchados"
                />

                {topTracks.length ? (
                    <div className={styles.list}>
                        {topTracks.map((track) => (
                            <TrackRow
                                key={track.id}
                                track={track}
                                onPlay={onPlay}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>Sin canciones disponibles.</p>
                )}
            </section>

            <section className={styles.block}>
                <SectionTitle
                    icon="💿"
                    title="Álbumes"
                    subtitle="Discografía del artista"
                />

                {albums.length ? (
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
                ) : (
                    <p className={styles.empty}>Sin álbumes disponibles.</p>
                )}
            </section>

            <section className={styles.block}>
                <SectionTitle
                    icon="🎵"
                    title="Playlists populares"
                    subtitle="Listas donde aparecen sus canciones"
                />

                {playlists.length ? (
                    <div className={styles.grid}>
                        {playlists.map((playlist) => (
                            <PlaylistCard
                                key={playlist.id}
                                playlist={playlist}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>Sin playlists disponibles.</p>
                )}
            </section>
        </div>
    );
};

export default ArtistResults;
