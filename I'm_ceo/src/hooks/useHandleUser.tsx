import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAlertModalStore } from "@_lib/store";
import { getUserInfo, postEmployeeDetail, postEmployerDetail, postSignIn, postSignUp } from "@_service/user";
import { EmployeeDetailInfo, EmployerDetailInfo, SigninUserInfo, SignupUserInfo } from "@_type/userInfo";

export const usePostSignIn = (handleModal: () => void) => {
  const { changeText } = useAlertModalStore();

  const { mutate: handleSignIn, isPending } = useMutation({
    mutationFn: (userData: SigninUserInfo) => postSignIn(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        changeText("어서오세요 사장님!", "");
        localStorage.setItem("token", data.item.token);
        localStorage.setItem("userId", data.item.user.item.id);
        localStorage.setItem("userType", data.item.user.item.type);

        handleModal();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data }: any = e.response;
        alert(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleSignIn, isPending };
};

export const usePostSignUp = (handleModal: () => void) => {
  const { changeText } = useAlertModalStore();

  const { mutate: handleSignUp, isPending } = useMutation({
    mutationFn: (userData: SignupUserInfo) => postSignUp(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        changeText("회원가입 완료!", "");
        handleModal();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data }: any = e.response;
        alert(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleSignUp, isPending };
};

export const useGetUserInfo = () => {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const data = await getUserInfo();
      return data.data.item;
    },
  });

  if (isError) {
    alert("다시 시도해주세요!");
  }

  return { userInfo: data, userInfoLoading: isPending, refetch };
};

export const usePostUserDetail = (isEmployer: boolean, closeModal: () => void, refetch: () => void) => {
  const checkType = (userData: EmployeeDetailInfo | EmployerDetailInfo) => {
    if (isEmployer) {
      return postEmployerDetail(userData);
    } else {
      return postEmployeeDetail(userData);
    }
  };

  const { mutate: postUserDetail, isPending } = useMutation({
    mutationFn: (userData: EmployeeDetailInfo | EmployerDetailInfo) => checkType(userData),
    onSuccess: ({ data }) => {
      if (data) {
        closeModal();
        refetch();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data }: any = e.response;
        alert(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { postUserDetail, isPending };
};
