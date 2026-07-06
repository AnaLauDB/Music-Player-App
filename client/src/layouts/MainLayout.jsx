import styles from "./MainLayout.module.css";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.main}>
        <Header />

        <HeroSection />
      </main>
    </div>
  );
}

export default MainLayout;
