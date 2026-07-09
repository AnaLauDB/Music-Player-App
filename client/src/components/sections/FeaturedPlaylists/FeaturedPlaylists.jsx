import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectError,
  selectLoading,
  selectPlaylists,
} from "../../../redux/music/musicSelectors";
import { fetchChart } from "../../../redux/music/musicThunks";

import PlaylistGrid from "./components/PlaylistGrid";
import PlaylistSkeleton from "./components/PlaylistSkeleton";
import SectionTitle from "../../common/SectionTittle";
import styles from "./FeaturedPlaylists.module.css";

function FeaturedPlaylists() {
  const dispatch = useAppDispatch();
  const playlists = useAppSelector(selectPlaylists);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (!playlists.length) {
      dispatch(fetchChart());
    }
  }, [dispatch, playlists.length]);

  return (
    <section className={styles.section}>
      <SectionTitle
        icon="🎵"
        title="Featured Playlists"
        subtitle="Las playlists más populares de Deezer"
      />

      {loading && (
        <div className={styles.grid}>
          <PlaylistSkeleton />
          <PlaylistSkeleton />
          <PlaylistSkeleton />
          <PlaylistSkeleton />
        </div>
      )}

      {!loading && error && (
        <p className={styles.message}>No pudimos cargar playlists: {error}</p>
      )}

      {!loading && !error && playlists.length === 0 && (
        <p className={styles.message}>
          No hay playlists disponibles por ahora.
        </p>
      )}

      {!loading && !error && playlists.length > 0 && (
        <PlaylistGrid playlists={playlists} />
      )}
    </section>
  );
}

export default FeaturedPlaylists;
