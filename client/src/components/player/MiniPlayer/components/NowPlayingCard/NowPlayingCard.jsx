import PlayingBadge from "./components/PlayingBadge";

import AlbumCover from "./components/AlbumCover";

import TrackInfo from "./components/TrackInfo";

import styles from "./NowPlayingCard.module.css";

const NowPlayingCard = () => {
  return (
    <section className={styles.card}>
      <PlayingBadge />

      <div className={styles.content}>
        <AlbumCover />

        <TrackInfo />
      </div>
    </section>
  );
};

export default NowPlayingCard;
