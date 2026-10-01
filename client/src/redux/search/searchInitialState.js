const searchInitialState = {
    searchQuery: "",

    // Consulta confirmada mediante submit, la que define la vista activa.
    submittedQuery: "",

    // "track" | "artist" | "album"
    intent: "track",

    results: {
        tracks: [],
        artists: [],
        albums: [],
        playlists: [],
    },

    // Detalle del artista cuando intent === "artist".
    artist: null,

    artistTopTracks: [],

    artistAlbums: [],

    artistPlaylists: [],

    loading: false,

    error: null,
};

export default searchInitialState;
