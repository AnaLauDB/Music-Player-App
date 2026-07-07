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
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Playlists</h2>
        <p className={styles.subtitle}>Lo más escuchado en Deezer</p>
      </div>

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
