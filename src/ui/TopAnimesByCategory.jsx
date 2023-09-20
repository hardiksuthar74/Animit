import { useEffect, useState } from "react";
import styled from "styled-components";

const TopAnimesByCategory = () => {
  const [items, setItems] = useState([]);

  const animeData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/animes/spotlight");
      const data = await response.json();

      setItems(data?.data.splice(0, 5));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    animeData();
  }, []);
  return (
    <StyledTopAnimes>
      <Airing>
        <Heading>Top Airing</Heading>
        <AnimeList>
          {items &&
            items.map((anime) => {
              return (
                <Anime key={anime.id}>
                  <img src={anime.image} />
                  <p>{anime.title}</p>
                </Anime>
              );
            })}
        </AnimeList>
      </Airing>
      <Popular>
        <Heading>Most Popular</Heading>
        <AnimeList>
          {items &&
            items.map((anime) => {
              return (
                <Anime key={anime.id}>
                  <img src={anime.image} />
                  <p>{anime.title}</p>
                </Anime>
              );
            })}
        </AnimeList>
      </Popular>
      <Favorite>
        <Heading>Most Favorite</Heading>
        <AnimeList>
          {items &&
            items.map((anime) => {
              return (
                <Anime key={anime.id}>
                  <img src={anime.image} />
                  <p>{anime.title}</p>
                </Anime>
              );
            })}
        </AnimeList>
      </Favorite>
      <Completed>
        <Heading>Latest Completed</Heading>
        <AnimeList>
          {items &&
            items.map((anime) => {
              return (
                <Anime key={anime.id}>
                  <img src={anime.image} />
                  <p>{anime.title}</p>
                </Anime>
              );
            })}
        </AnimeList>
      </Completed>
    </StyledTopAnimes>
  );
};

const StyledTopAnimes = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  font-size: 2rem;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Heading = styled.p`
  color: var(--color-font);
`;

const Airing = styled.div`
  margin-right: 2rem;
`;
const Popular = styled.div`
  margin-right: 2rem;
`;
const Favorite = styled.div`
  margin-right: 2rem;
`;
const Completed = styled.div`
  margin-right: 2rem;
`;

const AnimeList = styled.div`
  font-size: 1.3rem;
`;

const Anime = styled.div`
  margin: 2rem 0 2rem 0;
  display: grid;
  grid-template-columns: 1fr 5fr;
  text-align: left;
  column-gap: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.084);

  > img {
    border-radius: 7px;
    margin-bottom: 2rem;
  }

  > p {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default TopAnimesByCategory;
