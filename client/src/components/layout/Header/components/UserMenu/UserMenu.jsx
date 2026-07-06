import styles from "./UserMenu.module.css";

function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <div className={styles.avatar}>A</div>

      <span>Invitado</span>
    </div>
  );
}

export default UserMenu;
