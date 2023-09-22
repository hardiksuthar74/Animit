import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addAnimeMethod } from "../../api/userApi";

export const useAddAnime = (data) => {
  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate: addAnime } = useMutation({
    mutationFn: addAnimeMethod,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Anime Added Successfully`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { isAdding, addAnime };
};
