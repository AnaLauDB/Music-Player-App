import styles from "./NavItem.module.css";

function NavItem({ title, icon }) {
  return (
    <button className={styles.item}>
      <img src={icon} alt={title} className={styles.icon} />

      <span>{title}</span>
    </button>
  );
}

export default NavItem;
