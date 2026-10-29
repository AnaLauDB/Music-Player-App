import { normalize } from "./normalize.js";

/**
 * Resuelve que vista debe mostrarse a partir de la consulta.
 *
 * Se comparan los resultados de cada categoria con la consulta
 * normalizada. Cuando un titulo coincide de forma exacta se asume
 * que el usuario busca esa entidad; si no, se muestran canciones.
 */
export const detectIntent = ({ query, artists, albums, playlists }) => {
    const target = normalize(query.trim());

    if (!target) return "track";

    const artistMatch = artists.some(
        (artist) => normalize(artist.name) === target
    );

    if (artistMatch) return "artist";

    if (albums.some((album) => normalize(album.title) === target)) {
        return "album";
    }

    if (playlists.some((list) => normalize(list.title) === target)) {
        return "playlist";
    }

    return "track";
};
