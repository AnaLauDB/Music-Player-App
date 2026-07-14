import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { fetchChart } from "../../../redux/music/musicThunks";

import {
  selectTrendingTracks,
  selectMusicLoading,
  selectMusicError,
} from "../../../redux/music/musicSelectors";

import useAudio from "../../../hooks/useAudio";

import SectionTitle from "../../common/SectionTittle";
import Loader from "../../common/Loader";

import TrackRow from "./components/TrackRow";

import styles from "./TrendingTracks.module.css";

const TrendingTracks = () => {
  const dispatch = useAppDispatch();

  const tracks = useAppSelector(selectTrendingTracks);

  const loading = useAppSelector(selectMusicLoading);

  const error = useAppSelector(selectMusicError);

  const { playTrack } = useAudio();

  useEffect(() => {
    dispatch(fetchChart());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  // if (error) {
  //   return <ErrorState message={error} />;
  // }

  return (
    <section className={styles.section}>
      <SectionTitle
        title="Canciones en tendencia"
        subtitle="Top canciones de Deezer"
      />

      <div className={styles.list}>
        {tracks.map((track) => (
          <TrackRow key={track.id} track={track} onPlay={playTrack} />
        ))}
      </div>
    </section>
  );
};

export default TrendingTracks;
