import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAlertModalStore } from "@_lib/store";
import { getUserInfo, postEmployeeDetail, postEmployerDetail, postSignIn, postSignUp, putEmployerDetail } from "@_service/user";
import { EmployeeDetailInfo, EmployerDetailInfo, SigninUserInfo, SignupUserInfo } from "@_type/userInfo";

import "react-toastify/dist/ReactToastify.css";

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
        const { data }: any = e.response;
        toast.error(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleSignIn, isPending };
};

export const usePostSignUp = (handleModal: () => void) => {
  const { mutate: handleSignUp, isPending } = useMutation({
    mutationFn: (userData: SignupUserInfo) => postSignUp(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        toast.success("회원가입을 완료했습니다!");
        handleModal();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        const { data }: any = e.response;
        toast.error(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleSignUp, isPending };
};

export const useGetUserInfo = () => {
  const id = localStorage.getItem("userId") || "";

  const { data, isError, isPending, refetch } = useQuery({
    queryKey: ["userInfo", id],
    queryFn: async () => {
      const { data } = await getUserInfo(id);
      return data.item;
    },
  });

  if (isError) {
    toast.error("다시 시도해주세요!");
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

  const { mutate: postUserDetail, isPending: postLoading } = useMutation({
    mutationFn: (userData: EmployeeDetailInfo | EmployerDetailInfo) => checkType(userData),
    onSuccess: ({ data }) => {
      if (data) {
        closeModal();
        refetch();
        toast.success("등록이 완료되었습니다!");
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        const { data }: any = e.response;
        toast.error(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { postUserDetail, postLoading };
};

export const usePutUserDetail = (isEmployer: boolean, closeModal: () => void, refetch: () => void) => {
  const checkType = (userData: EmployeeDetailInfo | EmployerDetailInfo) => {
    if (isEmployer) {
      return putEmployerDetail(userData);
    } else {
      return postEmployeeDetail(userData);
    }
  };

  const { mutate: putUserDetail, isPending: putLoading } = useMutation({
    mutationFn: (userData: EmployeeDetailInfo | EmployerDetailInfo) => checkType(userData),
    onSuccess: ({ data }) => {
      if (data) {
        closeModal();
        refetch();
        toast.success("수정이 완료되었습니다!");
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        const { data }: any = e.response;
        toast.error(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { putUserDetail, putLoading };
};
