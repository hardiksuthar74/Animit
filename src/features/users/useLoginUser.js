import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUserMethod } from "../../api/userApi";
import toast from "react-hot-toast";

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const { isLoading: isLogging, mutate: loginUser } = useMutation({
    mutationFn: loginUserMethod,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Welcome ${data?.name}`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { isLogging, loginUser };
};
