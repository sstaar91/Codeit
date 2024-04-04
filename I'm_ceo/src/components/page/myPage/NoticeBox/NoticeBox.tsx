import { useNavigate } from "react-router-dom";
import { Button } from "@_component/Action";
import { NoticeListType } from "@_type/notice";

interface Props {
  noticeList: { item: NoticeListType }[];
}

const NoticeBox = ({ noticeList }: Props) => {
  const navigate = useNavigate();

  return (
    <article className="mt-4 py-4 px-6 w-full max-w-[768px] ">
      <h2 className="h4 mb-4">공고 리스트</h2>
      <div className="flex flex-col gap-2 w-full sm:grid sm:grid-cols-2">
        {noticeList &&
          noticeList.map(({ item }) => {
            return (
              <div key={item.id} className="flex justify-between items-center sm:flex-col gap-2 p-2 rounded-md bg-slate-50">
                <label className={`py-1 px-2 w-[50px] rounded-2xl text-center text-white label ${item.closed ? " bg-gray-300" : "bg-main"}`}>
                  {item.closed ? "마감" : "모집중"}
                </label>
                <span className="desc3 text-center w-full overflow-hidden ellipsis">{item.description}</span>
                <Button
                  type="move"
                  size="w-fit sm:w-full"
                  addStyle="label py-1 px-2"
                  clickAction={() => {
                    navigate(`/notice/${item.id}`);
                  }}
                >
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
