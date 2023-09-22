import { useMutation } from "@tanstack/react-query";
import { fetchSearchAnime } from "../../api/animeApi";

export const useSearchAnime = () => {
  const {
    isLoading: isSearching,
    mutate: searchAnime,
    data: anime,
  } = useMutation({
    mutationFn: fetchSearchAnime,
  });

  return { isSearching, searchAnime, anime };
};
