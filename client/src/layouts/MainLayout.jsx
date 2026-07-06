import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/layout/Hero";
import FeaturedPlaylists from "../components/layout/FeaturedPlaylists";
import TopArtists from "../components/layout/TopArtists";
import MiniPlayer from "../components/layout/MiniPlayer";
import Footer from "../components/layout/Footer";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.mainContent}>
        <Header />

        <Hero />

        <FeaturedPlaylists />

        <TopArtists />

        <MiniPlayer />

        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
