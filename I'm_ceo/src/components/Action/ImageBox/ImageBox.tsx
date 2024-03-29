import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { api } from "@_lib/api";
import { DetailUserInfo } from "@_type/userInfo";
import { Icon } from "@_component/UI";

interface Props {
  value: string;
  setData: Dispatch<SetStateAction<DetailUserInfo>>;
}

const ImageBox = ({ value, setData }: Props) => {
  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return null;
    }

    const file = e.target.files[0];
    const { data } = await api.post(`${import.meta.env.VITE_BASE_URL}/images`, { name: file.name });

    const presignedURL = await data.item.url;
    const putUrl = await presignedURL.slice(0, presignedURL.indexOf("?"));

    const res = await axios.put(presignedURL, file);

    if (res.status === 200) {
      const res = await axios.get(putUrl);

      if (res.status === 200) {
        setData((prev) => ({ ...prev, imageUrl: putUrl }));
      }
    }
  };

  return (
    <>
      <label htmlFor="imageUpload" className="flexCenterColumn row-span-3 h-[150px] w-full bg-transparent border-dashed border-2 rounded-lg overflow-hidden object-cover object-center">
        {value ? (
          <img src={value} alt="미리보기 이미지" />
        ) : (
          <div className="flexCenterColumn gap-2">
            <Icon type="image" size="w-6" />
            <span className="desc2 text-gray-400">이미지 추가하기</span>
          </div>
        )}
      </label>
      <input id="imageUpload" type="file" className="hidden" onChange={uploadImage} />
    </>
  );
};

export default ImageBox;

