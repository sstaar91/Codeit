import { ChangeEvent, useEffect, useState } from 'react';
import { postAxios } from '../../utils/axiosInstance';
import Icon from '../Icon';
import ProfileImg from '../ProfileImg';
import Cta from '../Cta';

import { Subject } from '../../types/subjectsType';
import css from './Modal.module.scss';

interface Props {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: React.Dispatch<React.SetStateAction<boolean>>;
  subject: Subject;
}

const Modal = ({ setIsOpenModal, refetch, subject }: Props) => {
  const [content, setContent] = useState('');
  const { id, name, imageSource } = subject;

  const handleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const createQuestion = () => {
    postAxios(`/subjects/${id}/questions/`, { content }).then(res => {
      if (res.data) {
        setIsOpenModal(prev => !prev);
        refetch(prev => !prev);
      }
    });
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={css.dimmedBackground} onClick={handleModal}>
      <div
        className={css.modalLayout}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        <div className={css.titleBox}>
          <Icon title="comment" width={28} />
          <span className={css.title}>질문을 작성하세요</span>
          <div className={css.iconPosition} onClick={handleModal}>
            <Icon title="close" />
          </div>
        </div>
        <div className={css.userInfo}>
          <span>To.</span>
          <ProfileImg url={imageSource} size="extraSmall" />
          <span>{name}</span>
        </div>
        <textarea
          className={css.textarea}
          placeholder="질문을 입력해주세요"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value);
          }}
        />
        <Cta
          title="질문 보내기"
          color="thick"
          type="modal"
          border="none"
          handleButton={createQuestion}
        />
      </div>
    </div>
  );
};

export default Modal;
