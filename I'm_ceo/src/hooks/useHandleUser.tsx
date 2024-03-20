import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "@_service/user";
import { SignupUserInfo } from "@_type/userInfo";

export const usePostSignUp = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (userData: SignupUserInfo) => postSignUp(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        alert("환영합니다!");
      }
    },
    onError: (e: any) => {
      alert("다시 시도해주세요!");
    },
  });

  return { mutate, isPending };
};
