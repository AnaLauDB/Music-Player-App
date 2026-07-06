import navigation from "../../data/navigation";

import NavItem from "../NavItem";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      {navigation.map((item) => (
        <NavItem key={item.id} title={item.title} icon={item.icon} />
      ))}
    </nav>
  );
}

export default Navigation;
