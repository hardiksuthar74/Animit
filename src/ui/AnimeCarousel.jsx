import { useEffect, useState } from "react";
import styled from "styled-components";

import { FaAngleRight, FaPlay, FaPlus, FaRegCalendar } from "react-icons/fa";

const AnimeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [items, setItems] = useState([]);

  const animeData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/animes/spotlight");
      const data = await response.json();

      setItems(data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    animeData();
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <StyledAnimeCarousel>
      <AnimeCarouselDetail>
        <Spotlight>#{items[activeIndex]?.rank} Spotlight</Spotlight>
        <AnimeTitle>{items[activeIndex]?.title}</AnimeTitle>
        <AnimeTypeDetails>
          <AnimeTypePara>
            <FaPlay />
            {items[activeIndex]?.type}
          </AnimeTypePara>
          <AnimeTypePara>
            <FaRegCalendar />
            {items[activeIndex]?.year}
          </AnimeTypePara>
          <AnimeTypeHd>HD</AnimeTypeHd>
        </AnimeTypeDetails>

        <AnimeSynopsis>
          {items[activeIndex]?.synopsis.slice(0, 300)}......
        </AnimeSynopsis>

        <AnimeActionContainer>
          <AnimeActionButton>
            <FaPlus />
            Add
          </AnimeActionButton>
          <AnimeActionButton>
            Detail
            <FaAngleRight />
          </AnimeActionButton>
        </AnimeActionContainer>
      </AnimeCarouselDetail>
      <AnimeCarouselImageContainer>
        <AnimeCarouselImage
          src={`http://127.0.0.1:5000/animebg/${items[activeIndex]?.coverImage}`}
        />
      </AnimeCarouselImageContainer>
      <CarouselButtonContainer>
        <CarouselButtonSub
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          {"<"}
        </CarouselButtonSub>
        <CarouselButtonAdd
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          {">"}
        </CarouselButtonAdd>
      </CarouselButtonContainer>
    </StyledAnimeCarousel>
  );
};

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

const CarouselButtonContainer = styled.div`
  > button {
    color: black;
    background-color: #cf9fff;
    position: absolute;
    right: 1rem;
    border-radius: 7px;
    border: 1px;
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
  }
`;

const CarouselButtonAdd = styled.button`
  top: 49rem;
  z-index: 22;
`;

const CarouselButtonSub = styled.button`
  top: 54rem;
  z-index: 22;
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
  position: relative;
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
