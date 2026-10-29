import * as musicController from "../controllers/musicController.js";
import { createRouter } from "../lib/router.js";

const router = createRouter();

router.get("/chart", musicController.getChart);

router.get("/search", musicController.searchAll);

router.get("/search/tracks", musicController.searchTracks);

router.get("/search/artists", musicController.searchArtists);

router.get("/search/albums", musicController.searchAlbums);

router.get("/search/playlists", musicController.searchPlaylists);

router.get(
    "/artists/:id/overview",
    musicController.getArtistOverview
);

router.get(
    "/artists/:id/top-tracks",
    musicController.getArtistTopTracks
);

router.get("/artists/:id/albums", musicController.getArtistAlbums);

router.get(
    "/artists/:id/playlists",
    musicController.getArtistPlaylists
);

router.get("/artists/:id", musicController.getArtist);

router.get("/albums/:id", musicController.getAlbum);

router.get("/playlists/:id", musicController.getPlaylist);

export default router;
