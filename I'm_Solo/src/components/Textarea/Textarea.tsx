import Cta from '../Cta';
import css from './Textarea.module.scss';

interface Props {
  type: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  handleQuestion: () => void;
  value?: string;
}

const Textarea = ({ type, setContent, handleQuestion, value = '' }: Props) => {
  const placeholder =
    type === 'questions' ? '질문을 입력해주세요' : '답변을 입력해주세요';
  const buttonTitle = type === 'questions' ? '질문 보내기' : '답변 완료';

  return (
    <>
      <textarea
        className={css.textarea}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value);
        }}
      />
      <Cta
        title={buttonTitle}
        color="thick"
        type="content"
        border="none"
        isActive={value === ''}
        handleButton={handleQuestion}
      />
    </>
  );
};

export default Textarea;
