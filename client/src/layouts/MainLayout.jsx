import styles from "./MainLayout.module.css";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import FeaturedPlaylists from "../components/sections/FeaturedPlaylists";
import TopArtists from "../components/sections/TopArtists";
import Footer from "../components/layout/Footer";
import TrendingTracks from "../components/sections/TrendingTracks";
import NowPlaying from "../components/player/NowPlaying";
import MiniPlayer from "../components/player/MiniPlayer";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.mainContent}>
        <Header />

        <MiniPlayer />

        <HeroSection />

        <NowPlaying />

        <FeaturedPlaylists />

        <TopArtists />

        <TrendingTracks />

        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
