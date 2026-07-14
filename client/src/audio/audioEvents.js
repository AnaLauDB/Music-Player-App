/**
 * Registra todos los eventos del reproductor.
 *
 * AudioManager únicamente controla el audio.
 * Este archivo escucha los eventos y ejecuta callbacks.
 */

export const registerAudioEvents = (audio, callbacks = {}) => {

    const {
        onLoadedMetadata,
        onTimeUpdate,
        onPlay,
        onPause,
        onEnded,
        onError,
    } = callbacks;

    if (onLoadedMetadata) {
        audio.addEventListener(
            "loadedmetadata",
            onLoadedMetadata
        );
    }

    if (onTimeUpdate) {
        audio.addEventListener(
            "timeupdate",
            onTimeUpdate
        );
    }

    if (onPlay) {
        audio.addEventListener(
            "play",
            onPlay
        );
    }

    if (onPause) {
        audio.addEventListener(
            "pause",
            onPause
        );
    }

    if (onEnded) {
        audio.addEventListener(
            "ended",
            onEnded
        );
    }

    if (onError) {
        audio.addEventListener(
            "error",
            onError
        );
    }
};

/**
 * Elimina todos los eventos registrados.
 * Se utilizará cuando desmontemos el Provider.
 */

export const unregisterAudioEvents = (
    audio,
    callbacks = {}
) => {

    const {
        onLoadedMetadata,
        onTimeUpdate,
        onPlay,
        onPause,
        onEnded,
        onError,
    } = callbacks;

    if (onLoadedMetadata) {
        audio.removeEventListener(
            "loadedmetadata",
            onLoadedMetadata
        );
    }

    if (onTimeUpdate) {
        audio.removeEventListener(
            "timeupdate",
            onTimeUpdate
        );
    }

    if (onPlay) {
        audio.removeEventListener(
            "play",
            onPlay
        );
    }

    if (onPause) {
        audio.removeEventListener(
            "pause",
            onPause
        );
    }

    if (onEnded) {
        audio.removeEventListener(
            "ended",
            onEnded
        );
    }

    if (onError) {
        audio.removeEventListener(
            "error",
            onError
        );
    }
};