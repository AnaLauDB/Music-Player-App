import { useAppSelector } from "../../../redux/hooks";

import { selectArtists, selectLoading } from "../../../redux/music";

import SectionTitle from "../../common/SectionTittle/index";
import ArtistGrid from "./components/ArtistGrid";
import ArtistSkeleton from "./components/ArtistSkeleton";
import styles from "./TopArtists.module.css";

const TopArtists = () => {
  const artists = useAppSelector(selectArtists);

  const loading = useAppSelector(selectLoading);

  return (
    <section className={styles.section}>
      <SectionTitle
        icon="🎤"
        title="Top Artists"
        subtitle="Los artistas más escuchados"
      />

      {loading ? <ArtistSkeleton /> : <ArtistGrid artists={artists} />}
    </section>
  );
};

export default TopArtists;
