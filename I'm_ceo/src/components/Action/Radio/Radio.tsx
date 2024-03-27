import { ChangeEvent, Fragment } from "react";
import { userRadioList } from "@_constant/actionProperty";
import { UserRadioType } from "@_type/userInfo";

interface Props {
  status: string;
  checkValue: string;
  handleRadio: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ status, checkValue, handleRadio }: Props) => {
  const radioList: { [key: string]: UserRadioType[] } = {
    signup: userRadioList,
  };

  return (
    <div className="grid grid-cols-2 gap-2 text-center w-full">
      {radioList[status].map(({ id, title, name, type }) => {
        return (
          <Fragment key={id}>
            <label
              className={`py-2 px-3 w-full text-sm font-bold cursor-pointer ${checkValue === type ? "border-main  border-b-2 text-main" : "text-slate-300"}`}
              htmlFor={type}
            >
              {title}
            </label>
            <input className="hidden" type="radio" id={type} name={name} value={type} onChange={handleRadio} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Radio;
