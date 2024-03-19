import { Link } from 'react-router-dom';
import ProfileImg from '../ProfileImg';
import Icon from '../Icon';

import { Subject } from '../../types/subjectsType';
import css from './Card.module.scss';

const Card = ({ id, name, imageSource, questionCount }: Subject) => {
  return (
    <Link className={css.cardBox} to={`/post/${id}`}>
      <ProfileImg url={imageSource} size="medium" />
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
