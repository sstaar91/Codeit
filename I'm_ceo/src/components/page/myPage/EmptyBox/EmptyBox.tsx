import { Button } from "@_component/Action";
import { EMPTY_USERINFO_MESSAGE } from "@_constant/noticeText";

interface Props {
  clickConfirm: () => void;
}

const EmptyBox = ({ clickConfirm }: Props) => {
  return (
    <article className="flexCenterColumn gap-12 py-6 h-full max-w-[640px] w-full rounded-2xl border-dashed border-2 border-main">
      <h3 className="text-center mx-5 text-wrap break-keep">{EMPTY_USERINFO_MESSAGE}</h3>
      <div className="flexCenterColumn animate-bounce w-24 h-24 rounded-full border-dashed border-2 border-slate-300 text-5xl font-bold  text-slate-300">
        ?
      </div>
      <Button type="confirm" size="w-2/5" clickAction={clickConfirm}>
        등록하기
      </Button>
    </article>
  );
};

export default EmptyBox;
