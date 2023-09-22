import styled from "styled-components";

import { FaAngleRight, FaPlay, FaPlus, FaRegCalendar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useSpotlightAnime } from "../features/anime/useSpotlightAnime";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import AddAnime from "./addAnime";
const AnimeCarousel = () => {
  const { isLoading, animes } = useSpotlightAnime();
  const navigate = useNavigate();
  const navigateToAnime = (id) => {
    navigate(`/anime/${id}`);
  };

  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  return (
    <div id="main-carousel">
      <Swiper navigation={true} modules={[Navigation]}>
        {animes.map((anime, index) => {
          return (
            <SwiperSlide key={index}>
              <StyledAnimeCarousel>
                <AnimeCarouselDetail>
                  <Spotlight>#{anime.rank} Spotlight</Spotlight>
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

                  <AnimeSynopsis>
                    {anime.synopsis.slice(0, 300)}......
                  </AnimeSynopsis>

                  <AnimeActionContainer>
                    <AddAnime animeId={anime.jikanAnimeId} />
                    <AnimeActionButton
                      onClick={() => navigateToAnime(anime.jikanAnimeId)}
                    >
                      Detail
                      <FaAngleRight />
                    </AnimeActionButton>
                  </AnimeActionContainer>
                </AnimeCarouselDetail>
                <AnimeCarouselImageContainer>
                  <AnimeCarouselImage
                    src={`http://127.0.0.1:5000/animebg/${anime.coverImage}`}
                  />
                </AnimeCarouselImageContainer>
              </StyledAnimeCarousel>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const StyledAnimeCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const AnimeCarouselDetail = styled.div`
  margin: 16rem 0rem 10rem 6rem;
`;

const Spotlight = styled.p`
  color: #cf9fff;
`;

const AnimeTitle = styled.p`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  height: 12rem;
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
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 2rem;
  margin-top: 2rem;
  overflow: hidden;
  height: 10rem;
`;

const AnimeCarouselImageContainer = styled.div`
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    270deg,
    transparent 0,
    rgb(36, 36, 40) 30%,
    rgb(36, 36, 40) 70%,
    transparent
  );
  mask-image: linear-gradient(
    270deg,
    transparent 0,
    rgb(36, 36, 40) 30%,
    rgb(36, 36, 40) 70%,
    transparent
  );
  width: 100rem;
  height: 60rem;
  margin-left: -20rem;
  z-index: -11;
`;
const AnimeCarouselImage = styled.img`
  filter: blur(1px);
  width: 100%;
  height: 100%;
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
  font-size: 1.6rem;
  color: #151515;
  border: 1px;
`;

export default AnimeCarousel;
