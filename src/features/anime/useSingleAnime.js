import { useQuery } from "@tanstack/react-query";
import { fetchSingleAnimeMethod } from "../../api/animeApi";

export const useSingleAnime = (id) => {
  const { isLoading, data: anime } = useQuery({
    queryKey: [`anime-${id}`],
    queryFn: () => fetchSingleAnimeMethod(id),
  });
  return { isLoading, anime };
};
