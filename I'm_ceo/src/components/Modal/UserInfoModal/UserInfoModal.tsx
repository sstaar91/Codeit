import { ChangeEvent, Fragment, MouseEvent, useState } from "react";
import axios from "axios";
import { api } from "@_lib/api";

import { ImageBox, Input, Select, Textarea } from "@_component/Action";

import { EMPLOYEE_DETAIL_INFO, EMPLOYER_DETAIL_INFO } from "@_context/userInfo";
import { employeeInputList, employerInputList } from "@_constant/actionProperty";
import { DetailUserInfo } from "@_type/userInfo";

interface Props {
  isEmployer: boolean;
  handleConfirmBtn: () => void;
}

const UserInfoModal = ({ isEmployer, handleConfirmBtn }: Props) => {
  const [userDetailInfo, setUserDetailInfo] = useState<DetailUserInfo>(isEmployer ? EMPLOYER_DETAIL_INFO : EMPLOYEE_DETAIL_INFO);
  const [curSelectType, setCurSelectType] = useState("");

  const onCloseDropDown = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (curSelectType !== "") setCurSelectType("");
  };

  const handleUserDetail = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetailInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onClickDropDown = (value: string) => {
    curSelectType === value ? setCurSelectType("") : setCurSelectType(value);
  };

  const onSelectOption = (value: string) => {
    setUserDetailInfo((prev) => ({ ...prev, [curSelectType]: value }));
  };

  const inputList = isEmployer ? employerInputList : employeeInputList;

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return null;
    }

    const file = e.target.files[0];
    const {data} = await api.post(`${import.meta.env.VITE_BASE_URL}/images`, { name:file.name });

    const presignedURL = await data.item.url;
        const putUrl = await presignedURL.slice(0, presignedURL.indexOf("?"));

        const res = await axios.put(presignedURL, file);

        if (res.status === 200) {
          const res = await axios.get(putUrl);

          if(res.status === 200) {
          setUserDetailInfo((prev) => ({ ...prev, imageUrl: putUrl }));
          }
        }

  };


  return (
    <article onClick={(e) => onCloseDropDown(e)} className="flexCenterColumn modalBox gap-4">
      <h2 className="w-full text-left h4 pl-2">{isEmployer ? "본사" : "사장님"} 정보</h2>
      <div className="grid grid-rows-5 grid-cols-[1fr_1fr] gap-x-4 w-full px-2 sm:flex sm:flex-col sm:gap-2">
        {inputList.map((el) => {
          return (
            <Fragment key={el.id}>
              {el.component === "input" && (
                <Input style="userInfo" name={el.name} value={userDetailInfo[el.name] || ""} handleInput={handleUserDetail} />
              )}
              {el.component === "select" && (
                <Select
                  type={el.name}
                  value={(userDetailInfo[el.name] as string) || ""}
                  open={curSelectType === el.name}
                  onClickDropDown={onClickDropDown}
                  onSelectOption={onSelectOption}
                />
              )}
              {el.component === "image" && <ImageBox value={userDetailInfo[el.name] as string} uploadImage={uploadImage}/>}
              {el.component === "textarea" && <Textarea type={localStorage.getItem("userType") || ""} value={userDetailInfo[el.name] as string} />}
            </Fragment>
          );
        })}
      </div>
    </article>
  );
};

export default UserInfoModal;
