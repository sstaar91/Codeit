import { ChangeEvent, Fragment, MouseEvent, useState } from "react";

import { Button, ImageBox, Input, Select, Textarea } from "@_component/Action";

import { EMPLOYEE_DETAIL_INFO, EMPLOYER_DETAIL_INFO } from "@_context/userInfo";
import { employeeInputList, employerInputList } from "@_constant/actionProperty";
import { DetailUserInfo } from "@_type/userInfo";
import { usePostUserDetail } from "@_hook/useHandleUser";
import { Icon } from "@_component/UI";

interface Props {
  isEmployer: boolean;
  closeModal: () => void;
  handleConfirmBtn: () => void;
}

const UserInfoModal = ({ isEmployer, closeModal, handleConfirmBtn }: Props) => {
  const [userDetailInfo, setUserDetailInfo] = useState<DetailUserInfo>(isEmployer ? EMPLOYER_DETAIL_INFO : EMPLOYEE_DETAIL_INFO);
  const [curSelectType, setCurSelectType] = useState("");
  const { postUserDetail, isPending } = usePostUserDetail(isEmployer, closeModal, handleConfirmBtn);

  const onCloseDropDown = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (curSelectType !== "") setCurSelectType("");
  };

  const handleUserDetail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetailInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onClickDropDown = (value: string) => {
    curSelectType === value ? setCurSelectType("") : setCurSelectType(value);
  };

  const onSelectOption = (value: string) => {
    setUserDetailInfo((prev) => ({ ...prev, [curSelectType]: value }));
  };

  const onSendUserDetail = () => {
    postUserDetail(userDetailInfo);
  };

  const inputList = isEmployer ? employerInputList : employeeInputList;
  const isAllInfoEntered = Object.values(userDetailInfo).every((el) => el);

  return (
    <article onClick={(e) => onCloseDropDown(e)} className="flexCenterColumn modalBox gap-4">
      <h2 className="w-full text-left h4 pl-2">{isEmployer ? "본사" : "사장님"} 정보</h2>
      <div className={`grid ${isEmployer ? "grid-rows-5 grid-cols-[1fr_1fr]" : "gap-2"} gap-x-4 w-full mb-4 px-2 sm:flex sm:flex-col sm:gap-2`}>
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
              {el.component === "image" && <ImageBox value={userDetailInfo[el.name] as string} setData={setUserDetailInfo} />}
              {el.component === "textarea" && (
                <Textarea type={localStorage.getItem("userType") || ""} value={userDetailInfo[el.name] as string} handleInput={handleUserDetail} />
              )}
            </Fragment>
          );
        })}
      </div>
      <Button type="confirm" size="w-1/2" disabled={!isAllInfoEntered} clickAction={onSendUserDetail}>
        <span className="flex justify-center gap-1">
          {isPending && <Icon type="loading" size="w-4" animation="animate-spin" />}
          등록하기
        </span>
      </Button>
    </article>
  );
};

export default UserInfoModal;
