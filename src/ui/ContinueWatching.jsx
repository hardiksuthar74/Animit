import styled from "styled-components";
import { useSpotlightAnime } from "../features/anime/useSpotlightAnime";
import Spinner from "./Spinner";

const ContinueWatching = () => {
  const { isLoading, animes } = useSpotlightAnime();

  if (isLoading) return <Spinner />;

  return (
    <div>
      ContinueWatching
      <AnimeList>
        {animes.map((anime) => {
          return (
            <Anime key={anime.id}>
              <AnimeImage src={anime.image} />
              <AnimeTitle>{anime.title}</AnimeTitle>
              <AnimeEpisodes>Episode: 1000</AnimeEpisodes>
            </Anime>
          );
        })}
      </AnimeList>
    </div>
  );
};

const AnimeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  row-gap: 2rem;
`;

const Anime = styled.div`
  width: 160px;
  height: 250px;
`;

const AnimeImage = styled.img`
  width: 100%;
  height: 80%;
`;

const AnimeTitle = styled.p`
  font-size: 1.4rem;
`;

const AnimeEpisodes = styled.p`
  font-size: 1.2rem;
`;

export default ContinueWatching;
