import styles from "./StatusValue.module.css";

const StatusValue = ({ value }) => {
  return <span className={styles.value}>{value}</span>;
};

export default StatusValue;
