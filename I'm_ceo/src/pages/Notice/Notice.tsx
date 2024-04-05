import { useGetNoticeDetail } from "@_hook/useHandleNotice";
import { PageLayout } from "@_component/Layout";
import { InfoCard, Loading } from "@_component/UI";

const Notice = () => {
  const { data, isPending } = useGetNoticeDetail();

  if (isPending) return <Loading />;

  const shopInfo = data.shop.item;

  const detailInfo = {
    imageUrl: shopInfo.imageUrl,
    name: shopInfo.name,
    address1: shopInfo.address1,
    address2: shopInfo.address2,
    workhour: shopInfo.workhour,
    category: shopInfo.category,
    startsAt: data.startsAt,
    hourlyPay: data.hourlyPay,
    description: data.description,
  };

  return (
    <PageLayout>
      <InfoCard infoDetail={detailInfo} openModal={() => {}} />
    </PageLayout>
  );
};

export default Notice;
