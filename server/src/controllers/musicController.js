import { musicService } from "../services/musicService.js";
import asyncHandler from "../utils/asyncHandler.js";

const requireQuery = (req) => {
    const query = String(req.query.q ?? "").trim();

    if (!query) {
        const error = new Error("El parámetro q es obligatorio.");
        error.status = 400;
        throw error;
    }

    return query;
};

export const getChart = asyncHandler(async (_req, res) => {
    const chart = await musicService.getChart();

    res.json(chart);
});

export const searchAll = asyncHandler(async (req, res) => {
    const query = requireQuery(req);

    const results = await musicService.searchAll(query);

    res.json(results);
});

export const searchTracks = asyncHandler(async (req, res) => {
    const query = requireQuery(req);

    const tracks = await musicService.searchTracks(query);

    res.json(tracks);
});

export const searchArtists = asyncHandler(async (req, res) => {
    const query = requireQuery(req);

    const artists = await musicService.searchArtists(query);

    res.json(artists);
});

export const searchAlbums = asyncHandler(async (req, res) => {
    const query = requireQuery(req);

    const albums = await musicService.searchAlbums(query);

    res.json(albums);
});

export const searchPlaylists = asyncHandler(async (req, res) => {
    const query = requireQuery(req);

    const playlists = await musicService.searchPlaylists(query);

    res.json(playlists);
});

export const getArtist = asyncHandler(async (req, res) => {
    const artist = await musicService.getArtist(req.params.id);

    res.json(artist);
});

export const getArtistTopTracks = asyncHandler(async (req, res) => {
    const tracks = await musicService.getArtistTopTracks(req.params.id);

    res.json(tracks);
});

export const getArtistAlbums = asyncHandler(async (req, res) => {
    const albums = await musicService.getArtistAlbums(req.params.id);

    res.json(albums);
});

export const getArtistPlaylists = asyncHandler(async (req, res) => {
    const playlists = await musicService.getArtistPlaylists(req.params.id);

    res.json(playlists);
});

export const getArtistOverview = asyncHandler(async (req, res) => {
    const overview = await musicService.getArtistOverview(req.params.id);

    res.json(overview);
});

export const getAlbum = asyncHandler(async (req, res) => {
    const album = await musicService.getAlbum(req.params.id);

    res.json(album);
});

export const getPlaylist = asyncHandler(async (req, res) => {
    const playlist = await musicService.getPlaylist(req.params.id);

    res.json(playlist);
});
