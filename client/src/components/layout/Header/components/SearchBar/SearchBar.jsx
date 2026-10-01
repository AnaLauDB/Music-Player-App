import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";

import {
  selectSearchQuery,
  selectSearchLoading,
} from "../../../../../redux/search/searchSelectors";

import { setSearchQuery, clearSearch } from "../../../../../redux/search/searchSlice";

import { searchAll } from "../../../../../redux/search/searchThunks";

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

    dispatch(searchAll(query));
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Buscar canciones o artistas..."
        disabled={loading}
        autoComplete="off"
      />

      <button type="submit" disabled={loading || !searchQuery.trim()}>
        {loading ? "Buscando..." : "Buscar"}
      </button>

      {searchQuery && (
        <button
          type="button"
          className={styles.clear}
          onClick={handleClear}
          disabled={loading}
          aria-label="Limpiar búsqueda"
        >
          Limpiar
        </button>
      )}
    </form>
  );
};

export default SearchBar;
