import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TrendingAnime = () => {
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

  return (
    <>
      <Trending>Trending</Trending>
      <TrendingAnimeFlex id="trendingAnimeId">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={6}
        >
          {items.map((anime, index) => {
            return (
              <SwiperSlide key={anime?.id}>
                <AnimeCard key={anime?.id}>
                  <img src={anime.image} />
                </AnimeCard>
                <AnimeTitle>
                  <AnimeRank>{index + 1}:</AnimeRank> {anime?.title}
                </AnimeTitle>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TrendingAnimeFlex>
    </>
  );
};

const Trending = styled.p`
  margin-top: 6rem;
  margin-left: 2rem;
  font-size: 2.4rem;
  color: #cf9fff;
`;

const TrendingAnimeFlex = styled.div`
  margin-left: 4rem;
  max-width: 140rem;
  position: relative;
`;

const AnimeCard = styled.div`
  /* width: auto; */
  height: 300px;
  padding: 1rem;
  text-align: center;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const AnimeRank = styled.span`
  color: #cf9fff;
  font-size: 1.8rem;
`;

const AnimeTitle = styled.p`
  text-align: center;
`;

export default TrendingAnime;
