import styles from "./ControlButton.module.css";

const ControlButton = ({
  icon,
  alt,
  onClick,
  disabled = false,
  large = false,
}) => {
  return (
    <button
      className={`${styles.button} ${large ? styles.large : ""}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <img src={icon} alt={alt} draggable={false} />
    </button>
  );
};

export default ControlButton;
