import useNowPlaying from "./hooks/useNowPlaying";

import AlbumCover from "./components/AlbumCover/AlbumCover";
import TrackInfo from "./components/TrackInfo/TrackInfo";
import PlaybackStatus from "./components/PlaybackStatus/PlaybackStatus";
import EmptyState from "./components/EmptyState/EmptyState";

import styles from "./NowPlaying.module.css";

const NowPlaying = () => {
  const {
    track,

    isPlaying,

    hasTrack,
  } = useNowPlaying();

  if (!hasTrack) {
    return <EmptyState />;
  }

  return (
    <section className={styles.container}>
      <AlbumCover cover={track.cover} title={track.title} />

      <TrackInfo title={track.title} artist={track.artist} />

      <PlaybackStatus isPlaying={isPlaying} />
    </section>
  );
};

export default NowPlaying;
