import { NoticeListType } from "@_type/notice";

interface Props {
  noticeList: { item: NoticeListType }[];
}

const NoticeBox = ({ noticeList }: Props) => {
  return (
    <article className="mt-4 py-4 px-6 w-full max-w-[768px] ">
      <h2 className="h4 mb-4">공고 리스트</h2>
      <div className="flex flex-col gap-2 w-full">
        {noticeList.map(({ item }) => {
          return (
            <div key={item.id} className="flex items-center gap-2">
              <label className={`py-1 px-2 w-[50px] rounded-2xl text-center text-white label ${item.closed ? " bg-gray-300" : "bg-main"}`}>
                {item.closed ? "마감" : "모집중"}
              </label>
              <span className="desc3">{item.description}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default NoticeBox;
