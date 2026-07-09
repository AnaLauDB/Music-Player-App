import styles from "./MainLayout.module.css";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import FeaturedPlaylists from "../components/sections/FeaturedPlaylists";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.mainContent}>
        <Header />

        <HeroSection />

        <FeaturedPlaylists />
      </main>
    </div>
  );
}

export default MainLayout;
