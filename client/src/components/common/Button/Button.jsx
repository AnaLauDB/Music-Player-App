import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", disabled = false }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
