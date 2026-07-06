import styles from "./HeroContent.module.css";

import HeroText from "../HeroText";
import HeroButtons from "../HeroButtons";

function HeroContent() {
  return (
    <div className={styles.content}>
      <HeroText />

      <HeroButtons />
    </div>
  );
}

export default HeroContent;
