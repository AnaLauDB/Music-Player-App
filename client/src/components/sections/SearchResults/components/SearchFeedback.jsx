import Loader from "../../../common/Loader";

import styles from "./SearchFeedback.module.css";

const SearchFeedback = ({ loading, error }) => {
    if (error) {
        return (
            <p className={styles.error} role="alert">
                No pudimos completar la búsqueda: {error}
            </p>
        );
    }

    if (loading) return <Loader />;

    return null;
};

export default SearchFeedback;
