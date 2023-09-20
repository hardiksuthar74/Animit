import styled from "styled-components";
import AnimeInfo from "../ui/AnimeInfo";

const AnimeDetail = () => {
  return (
    <StyledAnimeDetail>
      <AnimeInfo />
      {/* <RecommendedAnime /> */}
    </StyledAnimeDetail>
  );
};

const StyledAnimeDetail = styled.main`
  padding: 0 0 10rem 0;
`;

export default AnimeDetail;
