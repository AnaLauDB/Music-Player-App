import styles from "./StatusCard.module.css";
import StatusValue from "../StatusValue";

const StatusCard = ({ label, value }) => {
  return (
    <div className={styles.card}>
      <span>{label}</span>

      <StatusValue value={value} />
    </div>
  );
};

export default StatusCard;
