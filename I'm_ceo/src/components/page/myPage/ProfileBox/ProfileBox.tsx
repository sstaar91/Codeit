import { Button } from "@_component/Action";
import { Icon } from "@_component/UI";

import { DetailUserInfo } from "@_type/userInfo";
import defaultImage from "@_asset/images/main.jpeg";

interface Props {
  userDetail: DetailUserInfo;
  openModal: () => void;
}

const ProfileBox = ({ userDetail, openModal }: Props) => {
  const { imageUrl, name, category, address, address1, address2, originalHourlyPay, description, bio } = userDetail;

  return (
    <article className="py-4 px-6 w-full max-w-[768px] bg-slate-50 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="h4">등록 정보</h2>
        <Button type="cancle" size="w-fit" clickAction={openModal}>
          수정하기
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 mt-2 gap-4">
        <div className="rounded-lg overflow-hidden object-cover object-center w-full">
          <img className="rounded-lg" src={imageUrl || defaultImage} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1 align-top">
            <label className="py-1 px-2 desc3 text-white font-bold bg-main rounded-2xl">{category || "이름"}</label>
            <h3 className="h4">{name}</h3>
          </div>
          <div className="flex items-center gap-1 align-top desc2">
            <Icon type="map" size="w-5" />
            <h3>
              {address1 || address} {address2 || ""}
            </h3>
          </div>
          {originalHourlyPay && (
            <div className="flex items-center gap-1 align-top desc2">
              <Icon type="money" size="w-5" />
              <h3> {Number(originalHourlyPay).toLocaleString("ko-KR")} 원 (최초 창업비용) </h3>
            </div>
          )}
          <div className=" p-2 desc2 w-full h-full bg-transparent border-dashed border-2 rounded-lg bg-white">
            <h3>{description || bio}</h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileBox;
