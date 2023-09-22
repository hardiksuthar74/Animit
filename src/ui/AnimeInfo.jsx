import styled from "styled-components";
import Spinner from "./Spinner";
import { FaPlay, FaPlus, FaRegCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSingleAnime } from "../features/anime/useSingleAnime";
import AddAnime from "./addAnime";

const AnimeInfo = () => {
  const { animeId } = useParams();

  const { isLoading, anime } = useSingleAnime(animeId);

  if (isLoading) return <Spinner />;

  if (!anime) return <div>Anime Not Found</div>;

  return (
    <AnimeDetailSection>
      <BackgroundWrap>
        <BackgroundImageContainer
          backgroundimage={anime.image}
        ></BackgroundImageContainer>
      </BackgroundWrap>
      <AnimeDetailsContainer>
        <AnimeImage>
          <img src={anime.image} />
        </AnimeImage>
        <AnimeDetails>
          <AnimeTitle>{anime.title}</AnimeTitle>
          <AnimeTypeDetails>
            <AnimeTypePara>
              <FaPlay />
              {anime.type}
            </AnimeTypePara>
            <AnimeTypePara>
              <FaRegCalendar />
              {anime.year}
            </AnimeTypePara>
            <AnimeTypeHd>HD</AnimeTypeHd>
          </AnimeTypeDetails>

          <AnimeActionContainer>
            <AddAnime animeId={anime.mal_id} />
          </AnimeActionContainer>
          <AnimeSynopsis>{anime.synopsis}......</AnimeSynopsis>
          <p>Animit is the best site to track {anime.title} online</p>
        </AnimeDetails>
        <AnimeSideDetailsContainer>
          <AnimeSideDetails>
            <SideDetailsPara>
              Title: <span>{anime.title}</span>
            </SideDetailsPara>
            <SideDetailsPara>
              Year: <span>{anime.year}</span>
            </SideDetailsPara>
            <SideDetailsPara>
              Status: <span>{anime.status}</span>
            </SideDetailsPara>
            <SideDetailsPara>
              Animit score: <span>{anime.score}</span>
            </SideDetailsPara>
          </AnimeSideDetails>
        </AnimeSideDetailsContainer>
      </AnimeDetailsContainer>
    </AnimeDetailSection>
  );
};

const AnimeDetailSection = styled.section`
  position: relative;
`;

const SideDetailsPara = styled.p`
  font-size: 1.8rem;
  > span {
    font-size: 1.6rem;
  }
`;

const BackgroundWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  filter: grayscale(1);
`;

const BackgroundImageContainer = styled.div`
  background-image: url(${(props) => props.backgroundimage});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  filter: blur(20px);
  opacity: 0.35;
  transform: scale(1.2);
`;

const AnimeDetailsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr 1.4fr;
  color: #fff;
`;

const AnimeImage = styled.div`
  padding: 14rem 0rem 0rem 4rem;

  width: 200px;
  height: 250px;
`;

const AnimeDetails = styled.div`
  padding: 14rem 4rem 10rem 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;
const AnimeSideDetailsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
`;

const AnimeSideDetails = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 20rem 4rem 0 4rem;
`;

const AnimeTitle = styled.h2`
  font-size: 4.2rem;
  font-weight: 400;
`;

const AnimeTypeDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 2rem;
  font-size: 1.4rem;
`;

const AnimeTypePara = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.6rem;
`;

const AnimeTypeHd = styled.p`
  background-color: #cf9fff;
  padding: 3px 4px;
  border-radius: 5px;
  line-height: 1em;
  font-weight: 600;
  font-size: 12px;
  color: #151515;
`;
const AnimeSynopsis = styled.div`
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 2rem;
  margin-top: 2rem;
  overflow: hidden;
`;

const AnimeActionContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;

const AnimeActionButton = styled.button`
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;
  background-color: #cf9fff;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-size: 2rem;
  color: #151515;
  border: 1px;
`;

export default AnimeInfo;
