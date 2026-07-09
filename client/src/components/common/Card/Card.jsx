import styles from "./Card.module.css";

const Card = ({ children, className = "", onClick }) => {
  return (
    <article className={`${styles.card} ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
