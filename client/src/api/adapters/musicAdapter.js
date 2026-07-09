/**
 * Adapta una canción recibida desde Deezer
 * a un formato estándar para la aplicación.
 */
export const adaptTrack = (track) => ({
    id: track.id,

    title: track.title,

    duration: track.duration,

    preview: track.preview,

    artist: track.artist?.name ?? "Artista desconocido",

    album: track.album?.title ?? "Álbum desconocido",

    cover: track.album?.cover_xl || track.album?.cover_big || track.album?.cover_medium,

    link: track.link,
});

/**
 * Adapta una playlist de Deezer.
 */
export const adaptPlaylist = (playlist) => ({
    id: playlist.id,

    title: playlist.title,

    picture: playlist.picture_xl || playlist.picture_big,

    tracks: playlist.nb_tracks,

    link: playlist.link,
});

/**
 * Adapta un artista recibido desde Deezer.
 */
export const adaptArtist = (artist) => ({
    id: artist.id,

    name: artist.name,

    picture:
        artist.picture_xl ||
        artist.picture_big ||
        artist.picture_medium ||
        artist.picture_small ||
        artist.picture,

    fans: artist.nb_fan ?? artist.fans ?? 0,

    tracklist: artist.tracklist,

    link: artist.link,
});

/**
 * Adapta un álbum recibido desde Deezer.
 */
export const adaptAlbum = (album) => ({
    id: album.id,

    title: album.title,

    cover:
        album.cover_xl ||
        album.cover_big ||
        album.cover_medium,

    artist: album.artist?.name ?? "Artista desconocido",

    releaseDate: album.release_date,

    tracks: album.nb_tracks,

    link: album.link,
});