import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClint = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      //allow as to manually set some data into reactQuery cache
      queryClint.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => toast.error("Invalid email or password!"),
  });
  return { login, isLoading };
}
