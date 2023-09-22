import { FaCheck, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { useUser } from "../features/users/useUser";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddAnime } from "../features/users/useAddAnime";

const AddAnime = ({ animeId }) => {
  const [animeWatched, setAnimeWatched] = useState(false);
  const { isLoading, user } = useUser();
  const { isAdding, addAnime } = useAddAnime();
  const navigate = useNavigate();

  const addAnimeToUserMethod = () => {
    if (isLoading || !user) {
      toast.error("please login");
    } else {
      addAnime({
        jikanAnimeId: animeId,
      });
    }
  };

  useEffect(() => {
    if (!isLoading && user) {
      checkIfAnime();
    }
  }, [isLoading, user]);

  const checkIfAnime = () => {
    const animeData = user.data.animeData;
    animeData.map((anime) => {
      if (anime.jikanAnimeId === animeId) {
        setAnimeWatched(true);
      }
    });
  };

  const navigateToProfile = () => {
    navigate("/user/watchlist");
  };

  return (
    <>
      {!animeWatched && (
        <AnimeActionButton disabled={isAdding} onClick={addAnimeToUserMethod}>
          <FaPlus />
          Add
        </AnimeActionButton>
      )}
      {animeWatched && (
        <AnimeActionButton onClick={navigateToProfile}>
          <FaCheck />
          Added
        </AnimeActionButton>
      )}
    </>
  );
};

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

export default AddAnime;
