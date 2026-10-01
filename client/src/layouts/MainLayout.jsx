import styles from "./MainLayout.module.css";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
// import HeroSection from "../components/sections/HeroSection";
import FeaturedPlaylists from "../components/sections/FeaturedPlaylists";
import TopArtists from "../components/sections/TopArtists";
import Footer from "../components/layout/Footer";
import TrendingTracks from "../components/sections/TrendingTracks";
import SearchResults from "../components/sections/SearchResults";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.mainContent}>
        <Header />
        {/* 
        <HeroSection /> */}

        <SearchResults />

        <TopArtists />

        <FeaturedPlaylists />

        <TrendingTracks />

        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
