import SectionTitle from "../../../common/SectionTittle";
import TrackRow from "../../TrendingTracks/components/TrackRow";

import styles from "./TrackResults.module.css";

const TrackResults = ({ tracks, onPlay }) => {
    if (!tracks.length) {
        return <p className={styles.empty}>No se encontraron canciones.</p>;
    }

    return (
        <div className={styles.wrapper}>
            <SectionTitle
                title="Canciones"
                subtitle={`${tracks.length} coincidencias`}
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
        </div>
    );
};

export default TrackResults;
