import styles from "./SearchInput.module.css";

const SearchInput = ({ value, onChange, placeholder = "Buscar música..." }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
