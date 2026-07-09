import styles from "./SectionTitle.module.css";

const SectionTitle = ({ icon, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {icon && <span className={styles.icon}>{icon}</span>}

        <div>
          <h2 className={styles.title}>{title}</h2>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.line}></div>
    </header>
  );
};

export default SectionTitle;
