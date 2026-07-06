import styles from "./SidebarLogo.module.css";

import logo from "../../../../../assets/icons/logo.jpg";

function SidebarLogo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Music Explorer Logo" className={styles.logo} />

      <h1 className={styles.title}>Music Explorer</h1>

      <p className={styles.subtitle}>Discover your soundtrack</p>
    </div>
  );
}

export default SidebarLogo;
