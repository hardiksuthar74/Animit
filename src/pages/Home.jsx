import AnimeCarousel from "../ui/AnimeCarousel";
import TrendingAnime from "../ui/TrendingAnime";
import TopAnimesByCategory from "../ui/TopAnimesByCategory";
import "../main.css";

const Home = () => {
  return (
    <main>
      <AnimeCarousel />
      <TrendingAnime />
      <TopAnimesByCategory />
    </main>
  );
};

export default Home;
