import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";

import {
  selectCurrentTrack,
  selectVolume,
  selectMuted,
  setDuration,
  setProgress,
  setPlaying,
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
   * Registrar eventos del elemento Audio
   */
  useEffect(() => {
    const audio = audioManager.element;

    const callbacks = {
      onLoadedMetadata: () => {
        dispatch(setDuration(audio.duration || 0));
      },

      onTimeUpdate: () => {
        dispatch(setProgress(audio.currentTime || 0));
      },

      onPlay: () => {
        dispatch(setPlaying(true));
      },

      onPause: () => {
        dispatch(setPlaying(false));
      },

      onEnded: () => {
        dispatch(setPlaying(false));
        dispatch(setProgress(0));
      },
    };

    registerAudioEvents(audio, callbacks);

    return () => {
      unregisterAudioEvents(audio, callbacks);
    };
  }, [dispatch]);

  /**
   * Cuando cambia la canción seleccionada
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
