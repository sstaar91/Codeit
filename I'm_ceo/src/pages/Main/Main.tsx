import { useNavigate } from "react-router-dom";
import { useGetNoticeList } from "@_hook/useHandleNotice";

import { PageLayout } from "@_component/Layout";
import { Loading } from "@_component/UI";
import { INoticeList } from "@_type/notice";

const Main = () => {
  const navigate = useNavigate();
  const { notice, isLoading } = useGetNoticeList();

  const onClickNoitce = (shopId: string, noticeId: string) => {
    localStorage.setItem("noticeId", noticeId);
    localStorage.setItem("shopId", shopId);
    navigate(`/notice/${noticeId}`);
  };

  if (isLoading) return <Loading />;

  return (
    <PageLayout>
      <article className="p-4 w-full bg-slate-50 rounded-2xl max-w-[768px]">
        <h2 className="h4">공고 리스트</h2>
        <div className="flex mobile:flex-col gap-2 mt-4">
          {notice.map(({ item }: INoticeList) => {
            if (!item.shop) return null;
            const shopInfo = item.shop.item;

            return (
              <div
                key={item.id}
                onClick={() => onClickNoitce(shopInfo.id, item.id)}
                className="flex flex-col mobile:flex-row gap-2 py-3 px-4 rounded-xl bg-white w-1/3 mainNotice:w-1/2 mobile:w-full"
              >
                <div className="rounded-lg overflow-hidden mobile:w-2/5">
                  <img src={shopInfo.imageUrl} alt={shopInfo.name} />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1 w-full align-top break-keep	">
                    <label className="noticeCategory font-bold">{shopInfo.category}</label>
                    <h3 className="desc1 font-bold">{shopInfo.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 align-top">
                    <label className="noticeCategory font-bold">비용</label>
                    <h3 className="desc2">{Number(item.hourlyPay).toLocaleString("ko-KR")}원</h3>
                  </div>
                  <div className="flex items-center gap-1 w-full align-top break-keep	">
                    <label className="noticeCategory font-bold">위치</label>
                    <h3 className="desc2">{shopInfo.address1}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </PageLayout>
  );
};

export default Main;
