import SectionTitle from "../../../common/SectionTittle";

import styles from "./ArtistPicker.module.css";

const ArtistPicker = ({ artists, onSelect }) => {
    if (!artists.length) {
        return <p className={styles.empty}>No se encontraron artistas.</p>;
    }

    return (
        <div className={styles.wrapper}>
            <SectionTitle
                icon="👤"
                title="Artistas"
                subtitle="Elige un artista para ver su detalle"
            />

            <ul className={styles.list}>
                {artists.map((artist) => (
                    <li key={artist.id}>
                        <button
                            type="button"
                            className={styles.item}
                            onClick={() => onSelect(artist.id)}
                        >
                            <img
                                className={styles.avatar}
                                src={artist.picture}
                                alt={artist.name}
                                loading="lazy"
                            />

                            <span className={styles.text}>
                                <span className={styles.name}>
                                    {artist.name}
                                </span>

                                {artist.fans > 0 && (
                                    <span className={styles.fans}>
                                        {artist.fans.toLocaleString("es-ES")}{" "}
                                        oyentes
                                    </span>
                                )}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistPicker;
