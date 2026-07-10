import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Pixel Music Player © {year}</p>

      <span>Desarrollado con React + Redux + Deezer API</span>
    </footer>
  );
};

export default Footer;
