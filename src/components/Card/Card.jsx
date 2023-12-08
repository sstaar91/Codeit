import { useEffect, useState } from 'react';
import { calculateTime, changeDateType } from '../../utils/changeTime';
import axiosInstance from '../../utils/axiosInstance';

import Modal from '../Modal/Modal';

import defaultImage from './image/defaultImage.png';
import star from '/icons/i_star.svg';
import kebab from '/icons/i_kebab.svg';
import css from './Card.module.scss';

const Card = ({
  id,
  imageSource,
  image_source,
  createdAt,
  created_at,
  title,
  description,
  folder_id,
  url,
}) => {
  const [filterList, setFilterList] = useState([]);

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentModalType, setCurrentModalType] = useState('');

  const getFilterList = async () => {
    const res = await axiosInstance.get('/users/1/folders');
    setFilterList(res.data.data);
  };

  const handleDropDown = (e, clickId) => {
    e.preventDefault();
    if (clickId === id) setIsOpenDropdown(prev => !prev);
  };

  const handleIconBtn = (e, type) => {
    e.preventDefault();

    setIsOpenDropdown(prev => !prev);
    setIsOpenModal(prev => !prev);
    setCurrentModalType(type);
  };

  useEffect(() => {
    getFilterList();
  }, []);

  return (
    <a className={css.card} href={url} target="blank">
      <div className={css.imageBox}>
        <img className={css.star} src={star} />
        <img
          className={css.cardImg}
          src={
            imageSource || image_source
              ? imageSource || image_source
              : defaultImage
          }
          alt="image"
        />
      </div>
      <div className={css.cardDescription}>
        <div className={css.infoBox}>
          <span className={css.time}>
            {calculateTime(`${createdAt ? createdAt : created_at}`)}
          </span>
          <div className={css.dropdownBox}>
            <img src={kebab} onClick={e => handleDropDown(e, id)} />
            {isOpenDropdown && (
              <div className={css.dropdownMenu}>
                <span
                  className={css.menu}
                  onClick={e => handleIconBtn(e, 'linkDelete')}
                >
                  삭제하기
                </span>
                <span
                  className={css.menu}
                  onClick={e => handleIconBtn(e, 'addLink')}
                >
                  폴더에 추가
                </span>
              </div>
            )}
          </div>
        </div>
        <div className={css.description}>
          <p>{title}</p>
          <span>{description}</span>
        </div>
        <span className={css.createTime}>
          {changeDateType(`${createdAt ? createdAt : created_at}`)}
        </span>
      </div>
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          type={currentModalType}
          folderId={folder_id}
          folderName={url}
          filterList={filterList}
        />
      )}
    </a>
  );
};

export default Card;
