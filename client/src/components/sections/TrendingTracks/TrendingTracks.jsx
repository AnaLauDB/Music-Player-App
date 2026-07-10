import { useAppSelector } from "../../../redux/hooks";
import { selectTracks, selectLoading } from "../../../redux/music";
import SectionTitle from "../../common/SectionTittle";
import TrackList from "./components/TrackList";
import TrackSkeleton from "./components/TrackSkeleton";
import styles from "./TrendingTracks.module.css";

const handlePlay = (track) => {
  console.log("Play:", track.title);
};

const TrendingTracks = () => {
  const tracks = useAppSelector(selectTracks);
  const loading = useAppSelector(selectLoading);

  return (
    <section className={styles.section}>
      <SectionTitle
        icon="🎵"
        title="Trending Tracks"
        subtitle="Las canciones más populares del momento"
      />

      {loading ? (
        <TrackSkeleton />
      ) : (
        <TrackList tracks={tracks} onPlay={handlePlay} />
      )}
    </section>
  );
};

export default TrendingTracks;
