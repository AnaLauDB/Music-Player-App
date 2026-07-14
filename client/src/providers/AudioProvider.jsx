import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";

import {
  selectCurrentTrack,
  selectVolume,
  selectMuted,
  setDuration,
  setProgress,
  play,
  pause,
} from "../redux/player";

import {
  audioManager,
  registerAudioEvents,
  unregisterAudioEvents,
} from "../audio";

const AudioProvider = ({ children }) => {
  const dispatch = useAppDispatch();

  const currentTrack = useAppSelector(selectCurrentTrack);

  const volume = useAppSelector(selectVolume);

  const muted = useAppSelector(selectMuted);

  /**
   * Registrar eventos una sola vez
   */

  useEffect(() => {
    const audio = audioManager.element;

    const callbacks = {
      onLoadedMetadata: () => {
        dispatch(setDuration(audio.duration));
      },

      onTimeUpdate: () => {
        dispatch(setProgress(audio.currentTime));
      },

      onPlay: () => {
        dispatch(play());
      },

      onPause: () => {
        dispatch(pause());
      },
    };

    registerAudioEvents(audio, callbacks);

    return () => {
      unregisterAudioEvents(audio, callbacks);
    };
  }, [dispatch]);

  /**
   * Cambiar canción
   */

  useEffect(() => {
    if (!currentTrack?.preview) return;

    audioManager.load(currentTrack.preview);

    audioManager.play();
  }, [currentTrack]);

  /**
   * Volumen
   */

  useEffect(() => {
    audioManager.setVolume(volume);
  }, [volume]);

  /**
   * Mute
   */

  useEffect(() => {
    if (muted) {
      audioManager.mute();
    } else {
      audioManager.unmute();
    }
  }, [muted]);

  return children;
};

export default AudioProvider;
