const searchInitialState = {
    searchQuery: "",

    results: {
        tracks: [],
        artists: [],
        albums: [],
        playlists: [],
    },

    loading: false,

    error: null,
};

export default searchInitialState;