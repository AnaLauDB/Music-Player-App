import { normalize } from "./normalize.js";

/**
 * Elige el artista mas relevante.
 *
 * Deezer devuelve homonimos y artistas de seguimiento en cualquier orden
 * (por ejemplo "Michael Jackson" con 198 oyentes antes que el original
 * con 13M), asi que se prioriza el nombre exacto y luego los oyentes.
 */
export const pickArtist = (artists, query) => {
    const target = normalize(query.trim());

    const exact = artists.filter(
        (artist) => normalize(artist.name) === target
    );

    const pool = exact.length ? exact : artists;

    return [...pool].sort((a, b) => b.fans - a.fans)[0] ?? null;
};
