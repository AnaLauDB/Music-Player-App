import homeIcon from "../../../../assets/icons/home.png";
import favoriteIcon from "../../../../assets/icons/favorite.png";
import albumIcon from "../../../../assets/icons/album.png";
import playlistIcon from "../../../../assets/icons/playlist.png";
import artistIcon from "../../../../assets/icons/artist.png";
import genreIcon from "../../../../assets/icons/genre.png";

const navigation = [
    {
        id: 1,
        title: "Inicio",
        icon: homeIcon,
        path: "/",
    },
    {
        id: 2,
        title: "Favoritos",
        icon: favoriteIcon,
        path: "/favorites",
    },
    {
        id: 3,
        title: "Álbumes",
        icon: albumIcon,
        path: "/albums",
    },
    {
        id: 4,
        title: "Playlists",
        icon: playlistIcon,
        path: "/playlists",
    },
    {
        id: 5,
        title: "Artistas",
        icon: artistIcon,
        path: "/artists",
    },
    {
        id: 6,
        title: "Géneros",
        icon: genreIcon,
        path: "/genres",
    },
];

export default navigation;