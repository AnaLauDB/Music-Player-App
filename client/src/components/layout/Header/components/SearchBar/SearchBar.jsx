import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar canciones, artistas o álbumes..."
        className={styles.input}
      />
    </div>
  );
}

export default SearchBar;
