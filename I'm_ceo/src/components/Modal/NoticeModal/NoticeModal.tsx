import { ChangeEvent, Fragment, useEffect, useState } from "react";
import moment from "moment";
import useScrollBlock from "@_hook/useScrollBlock";
import { useGetNoticeDetail, usePostApplyNotice, usePutNoticeDetail } from "@_hook/useHandleNotice";

import { Button, Input, Textarea } from "@_component/Action";
import { Icon } from "@_component/UI";

import { NoticeInputType } from "@_type/notice";
import { NOTICE_INFO } from "@_context/noticeInfo";
import { registeNoticeList } from "@_constant/actionProperty";

interface Props {
  closeModal: () => void;
  handleConfirmBtn: () => void;
}

const NoticeModal = ({ closeModal, handleConfirmBtn }: Props) => {
  const [noticeInfo, setNoticeInfo] = useState<NoticeInputType>(NOTICE_INFO);
  const { handleApplyNotice, isPending } = usePostApplyNotice(successNotice);
  const { handleNoticeDetail } = usePutNoticeDetail(successNotice);
  const { data } = useGetNoticeDetail();

  function successNotice() {
    closeModal();
    handleConfirmBtn();
  }

  useScrollBlock();

  const handleNoticeInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNoticeInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onSendNotice = () => {
    const sendData = { ...noticeInfo, startsAt: `${noticeInfo.startsAt}T00:00:00Z` };
    data?.description ? handleNoticeDetail(sendData) : handleApplyNotice(sendData);
  };

  const isAllInfoEntered = Object.values(noticeInfo).every((el) => el);

  useEffect(() => {
    if (!data?.description) return;

    const infoKeys = Object.keys(noticeInfo);
    const newInfos = { ...noticeInfo };
    infoKeys.forEach((el) => {
      if (el === "startsAt") {
        return (newInfos[el] = moment(data[el]).format("YYYY-MM-DD"));
      }
      newInfos[el] = data[el];
    });

    setNoticeInfo(newInfos);
  }, []);

  return (
    <article className="flexCenterColumn modalBox gap-4" onClick={(e) => e.stopPropagation()}>
      <h2 className="w-full text-left h4 pl-2">{data?.description ? "공고 수정" : "공고 등록"}</h2>
      <div className={`grid gap-x-4 w-full mb-4 px-2 sm:flex sm:flex-col sm:gap-2`}>
        {registeNoticeList.map((el) => {
          return (
            <Fragment key={el.id}>
              {el.component === "input" && <Input style="userInfo" name={el.name} value={noticeInfo[el.name] || ""} handleInput={handleNoticeInfo} />}
              {el.component === "textarea" && <Textarea type="notice" value={noticeInfo[el.name] as string} handleInput={handleNoticeInfo} />}
            </Fragment>
          );
        })}
      </div>
      <Button type="confirm" size="w-1/2" disabled={!isAllInfoEntered && isPending} clickAction={onSendNotice}>
        <span className="flex justify-center gap-1">
          {isPending && <Icon type="loading" size="w-4" animation="animate-spin" />}
          등록하기
        </span>
      </Button>
    </article>
  );
};

export default NoticeModal;
