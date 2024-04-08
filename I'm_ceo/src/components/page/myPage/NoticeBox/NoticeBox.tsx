import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@_component/Action";
import { NoticeListType } from "@_type/notice";
import { userTypeStore } from "@_lib/store";

interface Props {
  noticeList: { item: NoticeListType }[];
  handleModal: (value: string) => void;
}

const NoticeBox = ({ noticeList, handleModal }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isEmployer } = userTypeStore();

  const goToNoticeDetail = (id: string) => {
    localStorage.setItem("noticeId", id);
    navigate(`/notice/${id}`);
  };

  return (
    <article className="mt-4 py-4 px-6 w-full max-w-[768px] ">
      <div className="flex justify-between items-center mb-4 w-full">
        <h2 className="h4">공고 리스트</h2>
        {pathname.includes("mypage") && isEmployer && (
          <span
            className="flex item-center justify-center bg-main w-5 h-5 text-center rounded-full text-white leading-[18px]"
            onClick={() => handleModal("notice")}
          >
            +
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full sm:grid sm:grid-cols-2">
        {noticeList &&
          noticeList.map(({ item }) => {
            return (
              <div key={item.id} className="flex justify-between items-center sm:flex-col gap-2 p-2 rounded-md bg-slate-50">
                <label className={`py-1 px-2 w-[50px] rounded-2xl text-center text-white label ${item.closed ? " bg-gray-300" : "bg-main"}`}>
                  {item.closed ? "마감" : "모집중"}
                </label>
                <span className="desc3 text-center w-full overflow-hidden ellipsis">{item.description}</span>
                <Button type="move" size="w-fit sm:w-full" addStyle="label py-1 px-2" clickAction={() => goToNoticeDetail(item.id)}>
                  지원자 확인
                </Button>
              </div>
            );
          })}
      </div>
    </article>
  );
};

export default NoticeBox;
