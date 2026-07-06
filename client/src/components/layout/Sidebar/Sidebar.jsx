import styles from "./Sidebar.module.css";

import SidebarLogo from "./components/SidebarLogo";

import Navigation from "./components/Navigation";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SidebarLogo />

      <Navigation />
    </aside>
  );
}

export default Sidebar;
