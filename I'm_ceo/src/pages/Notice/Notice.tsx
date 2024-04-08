import { useEffect, useState } from "react";
import { useGetNoticeDetail } from "@_hook/useHandleNotice";

import { PageLayout } from "@_component/Layout";
import { InfoCard, Loading } from "@_component/UI";
import { ModalLayout } from "@_component/Modal";

const Notice = () => {
  const [curModal, setCurModal] = useState("");
  const { data, isPending, refetch } = useGetNoticeDetail();

  const handleModal = (value: string) => {
    setCurModal(value);
  };

  useEffect(() => {
    if (curModal === "") refetch();
  }, [curModal]);

  if (isPending) return <Loading />;

  const shopInfo = data.shop.item;

  const detailInfo = {
    imageUrl: shopInfo.imageUrl,
    name: shopInfo.name,
    address1: shopInfo.address1,
    address2: shopInfo.address2,
    workhour: data.workhour,
    category: shopInfo.category,
    startsAt: data.startsAt,
    hourlyPay: data.hourlyPay,
    description: data.description,
  };

  return (
    <PageLayout>
      <InfoCard infoDetail={detailInfo} openModal={() => handleModal("notice")} />
      <ModalLayout category={curModal} status={curModal !== ""} closeModal={() => handleModal("")} handleConfirmBtn={() => handleModal("")} />
    </PageLayout>
  );
};

export default Notice;
