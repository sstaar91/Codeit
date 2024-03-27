import { textareaProperty } from "@_constant/actionProperty";

interface Props {
  type: string;
  value: string;
}

const Textarea = ({ type, value }: Props) => {
  const property = textareaProperty[type];
  const { name, placeholder } = property;

  return (
    <textarea
      placeholder={`${placeholder}에 대한 소개를 작성해주세요`}
      name={name}
      value={value}
      className="desc2 row-span-2 p-2 h-[100px] w-full bg-transparent border-dashed border-2 rounded-lg resize-none focus:outline-none focus:border-main"
    />
  );
};

export default Textarea;
