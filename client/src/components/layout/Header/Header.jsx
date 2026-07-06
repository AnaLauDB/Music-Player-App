import styles from "./Header.module.css";

import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import UserMenu from "./components/UserMenu";

function Header() {
  return (
    <header className={styles.header}>
      <SearchBar />

      <div className={styles.actions}>
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
