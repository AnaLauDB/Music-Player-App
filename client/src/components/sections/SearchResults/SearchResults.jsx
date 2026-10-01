import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import {
    selectHasSearch,
    selectSearchIntent,
    selectSearchError,
    selectSearchLoading,
    selectSearchResults,
    selectSearchArtist,
    selectArtistTopTracks,
    selectArtistAlbums,
    selectArtistPlaylists,
    selectSubmittedQuery,
    clearSearch,
} from "../../../redux/search";

import useAudio from "../../../hooks/useAudio";

import SectionTitle from "../../common/SectionTittle";

import TrackResults from "./components/TrackResults";
import AlbumResults from "./components/AlbumResults";
import PlaylistResults from "./components/PlaylistResults";
import ArtistResults from "./components/ArtistResults";
import ArtistPicker from "./components/ArtistPicker";
import SearchFeedback from "./components/SearchFeedback";

import { fetchArtistOverview } from "../../../redux/search/searchThunks";

import styles from "./SearchResults.module.css";

const TABS = [
    { id: "track", label: "Canciones", icon: "🎵" },
    { id: "artist", label: "Artistas", icon: "👤" },
    { id: "album", label: "Álbumes", icon: "💿" },
    { id: "playlist", label: "Playlists", icon: "🎶" },
];

const SearchResults = () => {
    const dispatch = useAppDispatch();

    const hasSearch = useAppSelector(selectHasSearch);

    const intent = useAppSelector(selectSearchIntent);

    const submittedQuery = useAppSelector(selectSubmittedQuery);

    const results = useAppSelector(selectSearchResults);

    const artist = useAppSelector(selectSearchArtist);

    const topTracks = useAppSelector(selectArtistTopTracks);

    const artistAlbums = useAppSelector(selectArtistAlbums);

    const artistPlaylists = useAppSelector(selectArtistPlaylists);

    const loading = useAppSelector(selectSearchLoading);

    const error = useAppSelector(selectSearchError);

    const { playTrack } = useAudio();

    // Deezer no indica que busca el usuario: la vista detectada se usa
    // como punto de partida. El override_manual manda sobre ella y se
    // reinicia con cada busqueda confirmada.
    const [override, setOverride] = useState(null);

    const tab = override ?? intent;

    const handleTab = (tabId) => {
        setOverride(tabId === intent ? null : tabId);
    };

    if (!hasSearch) return null;

    const counts = {
        track: results.tracks.length,
        artist: results.artists.length,
        album: results.albums.length,
        playlist: results.playlists.length,
    };

    const total = Object.values(counts).reduce((sum, n) => sum + n, 0);

    return (
        <section className={styles.section}>
            <div className={styles.bar}>
                <SectionTitle
                    icon="🔎"
                    title="Resultados de búsqueda"
                    subtitle="Coincidencias encontradas en Deezer"
                />

                <button
                    type="button"
                    className={styles.close}
                    onClick={() => dispatch(clearSearch())}
                >
                    Cerrar
                </button>
            </div>

            <nav
                className={styles.tabs}
                aria-label="Categoría de resultados"
            >
                {TABS.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={
                            tab === item.id
                                ? `${styles.tab} ${styles.tabActive}`
                                : styles.tab
                        }
                        onClick={() => handleTab(item.id)}
                    >
                        <span aria-hidden="true">{item.icon}</span>

                        {item.label}

                        {!!counts[item.id] && (
                            <span className={styles.count}>
                                {counts[item.id]}
                            </span>
                        )}
                    </button>
                ))}
            </nav>

            <SearchFeedback loading={loading} error={error} />

            {!loading && !error && total === 0 && (
                <p className={styles.error}>
                    No encontramos nada para «{submittedQuery}».
                </p>
            )}

            {!loading && !error && tab === "track" && (
                <TrackResults tracks={results.tracks} onPlay={playTrack} />
            )}

            {!loading && !error && tab === "album" && (
                <AlbumResults
                    albums={results.albums}
                    tracks={results.tracks}
                    onPlay={playTrack}
                />
            )}

            {!loading && !error && tab === "playlist" && (
                <PlaylistResults playlists={results.playlists} />
            )}

            {!loading && !error && tab === "artist" && artist && (
                <ArtistResults
                    artist={artist}
                    topTracks={topTracks}
                    albums={artistAlbums}
                    playlists={artistPlaylists}
                    onPlay={playTrack}
                />
            )}

            {!loading && !error && tab === "artist" && !artist && (
                <ArtistPicker
                    artists={results.artists}
                    onSelect={(artistId) =>
                        dispatch(fetchArtistOverview(String(artistId)))
                    }
                />
            )}
        </section>
    );
};

export default SearchResults;
