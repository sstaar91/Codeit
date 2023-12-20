import { Link } from 'react-router-dom';
import ProfileImg from '../ProfileImg';
import Icon from '../Icon';

import css from './Card.module.scss';

interface Props {
  id: number;
  name: string;
  questionCount: string;
}

const Card = ({ name, questionCount }: Props) => {
  return (
    <Link className={css.cardBox} to="/post/1">
      <ProfileImg url="" size="medium" />
      <div className={css.nickName}>{name}</div>
      <div className={css.infoBox}>
        <Icon title="comment" />
        <div className={css.descriptionBox}>
          <span>받은 질문</span>
          <span>{questionCount}개</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
