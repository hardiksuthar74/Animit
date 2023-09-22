import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUserMethod } from "../../api/userApi";
import toast from "react-hot-toast";

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: addUser } = useMutation({
    mutationFn: registerUserMethod,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Welcome ${data?.name}`);
      toast.success("Keep your anime bing watching in check with animit");
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { isCreating, addUser };
};
