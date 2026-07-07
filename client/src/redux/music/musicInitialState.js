/**
 * ======================================================
 * Estado inicial del módulo de música
 * ======================================================
 *
 * Este archivo centraliza el estado inicial del módulo.
 * Si en el futuro agregamos nuevas propiedades, solo
 * modificaremos este archivo.
 */

const musicInitialState = {

    // Canciones obtenidas desde la API
    tracks: [],

    // Artistas destacados
    artists: [],

    // Playlists destacadas
    playlists: [],

    // Álbum actualmente seleccionado
    selectedAlbum: null,

    // Artista actualmente seleccionado
    selectedArtist: null,

    // Texto de búsqueda
    searchQuery: "",

    // Estado de carga
    loading: false,

    // Mensaje de error
    error: null,

};

export default musicInitialState;