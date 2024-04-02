import { textareaProperty } from "@_constant/actionProperty";
import { ChangeEvent } from "react";

interface Props {
  type: string;
  value: string;
  handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Textarea = ({ type, value, handleInput }: Props) => {
  const property = textareaProperty[type];
  const { name, placeholder } = property;

  return (
    <textarea
      className="desc2 row-span-2 p-2 h-[100px] w-full bg-transparent border-dashed border-2 rounded-lg resize-none focus:outline-none focus:border-main"
      placeholder={`${placeholder}에 대한 설명을 입력해주세요`}
      name={name}
      value={value}
      onChange={handleInput}
    />
  );
};

export default Textarea;
