export const MUSIC_ENDPOINTS = {
    CHART: "/music/chart",

    SEARCH: "/music/search",

    SEARCH_TRACKS: "/music/search/tracks",

    SEARCH_ARTISTS: "/music/search/artists",

    SEARCH_ALBUMS: "/music/search/albums",

    SEARCH_PLAYLISTS: "/music/search/playlists",

    ARTIST: (id) => `/music/artists/${id}`,

    ARTIST_OVERVIEW: (id) => `/music/artists/${id}/overview`,

    ARTIST_TOP_TRACKS: (id) => `/music/artists/${id}/top-tracks`,

    ARTIST_ALBUMS: (id) => `/music/artists/${id}/albums`,

    ARTIST_PLAYLISTS: (id) => `/music/artists/${id}/playlists`,

    ALBUM: (id) => `/music/albums/${id}`,

    PLAYLIST: (id) => `/music/playlists/${id}`,
};
