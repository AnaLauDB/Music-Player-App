import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import {
  fetchChart,
  selectTracks,
  selectArtists,
  selectPlaylists,
  selectLoading,
  selectError,
} from "../../../redux/music";

import StatusCard from "./components/StatusCard";

import styles from "./ReduxDevPanel.module.css";

const ReduxDevPanel = () => {
  const dispatch = useAppDispatch();

  const tracks = useAppSelector(selectTracks);

  const artists = useAppSelector(selectArtists);

  const playlists = useAppSelector(selectPlaylists);

  const loading = useAppSelector(selectLoading);

  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchChart());
  }, [dispatch]);

  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>Redux Dev Panel</h2>

      <StatusCard label="🎵 Tracks" value={tracks.length} />

      <StatusCard label="🎤 Artists" value={artists.length} />

      <StatusCard label="📀 Playlists" value={playlists.length} />

      <StatusCard label="⏳ Loading" value={loading ? "true" : "false"} />

      <StatusCard label="⚠ Error" value={error ?? "Ninguno"} />
    </section>
  );
};

export default ReduxDevPanel;
