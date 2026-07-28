import styles from "./Sidebar.module.css";

import SidebarLogo from "./components/SidebarLogo";

import Navigation from "./components/Navigation";
import MiniPlayer from "../../player/MiniPlayer";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SidebarLogo />

      <Navigation />

      <div className={styles.player}>
        <MiniPlayer />
      </div>
    </aside>
  );
}

export default Sidebar;
