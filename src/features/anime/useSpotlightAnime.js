import { useQuery } from "@tanstack/react-query";
import { fetchSpotlightAnimeMethod } from "../../api/animeApi";

export const useSpotlightAnime = () => {
  const { isLoading, data: animes } = useQuery({
    queryKey: ["animes"],
    queryFn: fetchSpotlightAnimeMethod,
  });
  return { isLoading, animes };
};
