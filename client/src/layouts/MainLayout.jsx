import styles from "./MainLayout.module.css";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import FeaturedPlaylists from "../components/sections/FeaturedPlaylists";
// import ReduxDevPanel from "../components/dev/ReduxDevPanel";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.mainContent}>
        <Header />

        <HeroSection />

        <FeaturedPlaylists />

        {/* <ReduxDevPanel /> */}
      </main>
    </div>
  );
}

export default MainLayout;
