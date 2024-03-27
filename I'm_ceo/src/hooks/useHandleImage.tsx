import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { postImageUpload } from "@_service/user";
import { useState } from "react";

export const usePostImageUpload = () => {
  const [url, setUrl] = useState("");

  const { mutate: imageUpload, isPending: imageLoading } = useMutation({
    mutationFn: (name: string) => postImageUpload(name),
    onSuccess: async ({ data }) => {
      if (data.item) {
        const presignedURL = await data.item.url;
        const putUrl = await presignedURL.slice(0, presignedURL.indexOf("?"));
        setUrl(putUrl);
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

  return { imageUpload, url, imageLoading };
};
