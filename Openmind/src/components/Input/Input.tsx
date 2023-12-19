import { useState } from 'react';
import Icon from '../Icon';
import css from './Input.module.scss';

interface Props {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ handleInput }: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={`${css.inputBox} ${isFocus ? css.focus : ''}`}>
      <Icon title="person" />
      <input
        className={css.nameInput}
        placeholder="이름을 입력하세요"
        onFocus={() => {
          setIsFocus(prev => !prev);
        }}
        onBlur={() => {
          setIsFocus(prev => !prev);
        }}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
