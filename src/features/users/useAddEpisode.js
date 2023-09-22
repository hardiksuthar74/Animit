import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addEpisodeMethod } from "../../api/userApi";

export const useAddEpisode = (data) => {
  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate: addEpisode } = useMutation({
    mutationFn: addEpisodeMethod,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Episode Added Successfully`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { isAdding, addEpisode };
};
