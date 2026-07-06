import styles from "./HeroSection.module.css";

import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <HeroContent />

      <HeroImage />
    </section>
  );
}

export default HeroSection;
