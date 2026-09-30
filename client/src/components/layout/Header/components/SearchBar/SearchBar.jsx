import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";

import {
  selectSearchQuery,
  selectSearchLoading,
} from "../../../../../redux/search/searchSelectors";

import { setSearchQuery } from "../../../../../redux/search/searchSlice";

import { searchTracks } from "../../../../../redux/search/searchThunks";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector(selectSearchQuery);

  const loading = useAppSelector(selectSearchLoading);

  const handleChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    dispatch(searchTracks(query));
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Buscar canciones, artistas o álbumes..."
        disabled={loading}
      />

      <button type="submit" disabled={loading || !searchQuery.trim()}>
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
};

export default SearchBar;
