import { addressSelectList, categorySelectList } from "@_constant/actionProperty";

interface Props {
  type: string;
  value: string;
  open: boolean;
  onClickDropDown: (value: string) => void;
  onSelectOption: (value: string) => void;
}

const Select = ({ type, value, open, onClickDropDown, onSelectOption }: Props) => {
  const placeholderList: { [key: string]: string } = {
    category: "업종을 선택해주세요",
    address: "지역을 선택해주세요",
    address1: "지역을 선택해주세요",
  };

  const optionList: { [key: string]: string[] } = {
    category: categorySelectList,
    address: addressSelectList,
    address1: addressSelectList,
  };

  return (
    <div
      className={`relative desc2 p-2 h-8 bg-transparent border-dashed border-b-2 w-full ${value ? "text-black" : "text-gray-400"}`}
      onClick={() => onClickDropDown(type)}
    >
      {value ? value : placeholderList[type]}
      {open && (
        <ul className="absolute flex flex-col gap-2 top-9 left-0 p-2 h-[200px] w-full rounded-xl border-solid border border-slate-300 shadow-xl bg-white text-black overflow-scroll	 z-10">
          {optionList[type].map((el) => {
            return (
              <li key={el} className=" p-2 rounded-lg bg-gray-100 text-center" onClick={() => onSelectOption(el)}>
                {el}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
