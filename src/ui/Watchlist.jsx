import { FaHeart, FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
import Modal from "./Modal";
import AnimeAction from "./AnimeAction";
import { useUser } from "../features/users/useUser";

const Watchlist = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const type = searchParams.get("type");

  const { isLoading, user } = useUser();

  if (isLoading) return <Spinner />;

  let animeDataToShow = !type
    ? user.data.animeData
    : user.data.animeData.filter((anime) => anime.userAnimeStatus == type);

  return (
    <div>
      <Title>
        <FaHeart />
        Watchlist
      </Title>
      <AnimeFilter>
        <Filter className={`${type === null ? "active" : ""}`}>
          <Link to={"/user/watchlist"}>All</Link>
        </Filter>
        <Filter className={`${type == 1 ? "active" : ""}`}>
          <Link to={"/user/watchlist?type=1"}>Watching</Link>
        </Filter>
        <Filter className={`${type == 2 ? "active" : ""}`}>
          <Link to={"/user/watchlist?type=2"}>On Hold</Link>
        </Filter>
        <Filter className={`${type == 3 ? "active" : ""}`}>
          <Link to={"/user/watchlist?type=3"}>Plan to Watch</Link>
        </Filter>
        <Filter className={`${type == 4 ? "active" : ""}`}>
          <Link to={"/user/watchlist?type=4"}>Completed</Link>
        </Filter>
      </AnimeFilter>
      <AnimeList>
        {animeDataToShow.map((anime) => {
          return (
            <Anime key={anime.id}>
              <AnimeImageContainer>
                <AnimeImage src={anime.image} />
              </AnimeImageContainer>
              <AnimeTitle>{anime.title}</AnimeTitle>
              {anime.userAnimeStatus !== 4 && (
                <EpisodeAction>
                  <AnimeEpisodes>Episode: {anime.userEpisode}</AnimeEpisodes>
                  <Modal>
                    <Modal.Open opens="addForm">
                      <FaPlus className="pointer" />
                    </Modal.Open>
                    <Modal.Window name="addForm">
                      <AnimeAction anime={anime} />
                    </Modal.Window>
                  </Modal>
                </EpisodeAction>
              )}
              {anime.userAnimeStatus === 4 && (
                <EpisodeAction>Completed</EpisodeAction>
              )}
            </Anime>
          );
        })}
      </AnimeList>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  column-gap: 1.4rem;
`;

const AnimeFilter = styled.div`
  margin-top: 2rem;
  display: flex;
  font-size: 1.6rem;
  column-gap: 1.4rem;
`;

const Filter = styled.p`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.6rem;

  &.active {
    background-color: var(--color-font);
    color: #151515;
  }
`;

const AnimeList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Anime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnimeImageContainer = styled.div`
  width: 120px;
`;

const AnimeImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 1.2rem;
`;

const AnimeTitle = styled.p`
  font-size: 1.6rem;
  color: var(--color-font);
`;

const EpisodeAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
  font-size: 2rem;

  > .pointer {
    cursor: pointer;
  }
`;

const AnimeEpisodes = styled.p`
  font-size: 1.6rem;
`;
export default Watchlist;
