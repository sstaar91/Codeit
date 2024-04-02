import { userTypeStore } from "@_lib/store";
import { Button } from "@_component/Action";
import { EMPTY_USERINFO_MESSAGE, EMPTY_NOTICE_MESSAGE, EMPTY_APPLY_MESSAGE } from "@_constant/noticeText";

interface Props {
  status: string;
  btnText: string;
  clickConfirm: () => void;
}

const EmptyBox = ({ status, btnText, clickConfirm }: Props) => {
  const { isEmployer } = userTypeStore();

  const errorMsgList: { [key: string]: string } = {
    userInfo: EMPTY_USERINFO_MESSAGE,
    notice: isEmployer ? EMPTY_NOTICE_MESSAGE : EMPTY_APPLY_MESSAGE,
  };

  return (
    <article className="flexCenterColumn gap-12 mt-4 py-6 h-2/5 max-w-[768px] w-full rounded-2xl border-dashed border-2 border-main">
      <h3 className="text-center mx-5 text-wrap break-keep whitespace-pre-wrap">{errorMsgList[status]}</h3>
      <div className="flexCenterColumn animate-bounce w-24 h-24 rounded-full border-dashed border-2 border-slate-300 text-5xl font-bold  text-slate-300">
        ?
      </div>
      <Button type="confirm" size="w-2/5" clickAction={clickConfirm}>
        {btnText}
      </Button>
    </article>
  );
};

export default EmptyBox;
