import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Cta from '../Cta';

import close from '/icons/i_close.svg';
import kakao from '/icons/i_full_kakao.svg';
import facebook from '/icons/i_full_facebook.svg';
import share from '/icons/i_full_share.svg';
import check from '/icons/i_check.svg';

import css from './Modal.module.scss';

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  return ReactDom.createPortal(children, modalRoot);
};

const Modal = ({
  setIsOpenModal,
  type,
  folderName,
  folderId,
  filterList = [],
}) => {
  const [folderTitle, setFolderTitle] = useState(folderName);
  const [selectFolderList, setSelectFolderList] = useState([]);

  const handleFolderList = id => {
    selectFolderList.includes(id)
      ? setSelectFolderList(prev => prev.filter(el => el !== id))
      : setSelectFolderList(prev => [...prev, id]);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (folderId) {
      setSelectFolderList(prev => [...prev, folderId]);
    }
  }, [folderId]);

  return (
    <ModalPortal>
      <div
        className={css.dimmedBackground}
        onClick={() => {
          setIsOpenModal(prev => !prev);
        }}
      >
        <div
          className={css.container}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <img
            className={css.closeBtn}
            src={close}
            alt="close icon"
            onClick={() => {
              setIsOpenModal(prev => !prev);
            }}
          />
          <h3 className={css.title}>{TITLE_LIST[type].title}</h3>
          {type === 'modify' || type === 'add' ? (
            <input
              className={css.modifyInput}
              type="text"
              value={folderTitle}
              placeholder="폴더 이름"
              onChange={e => {
                setFolderTitle(e.target.value);
              }}
            />
          ) : (
            <span className={css.description}>{folderName}</span>
          )}
          {type === 'share' && (
            <div className={css.iconBox}>
              <div className={css.iconBtn}>
                <img src={kakao} />
                <span>카카오톡</span>
              </div>
              <div className={css.iconBtn}>
                <img src={facebook} />
                <span>페이스북</span>
              </div>
              <div className={css.iconBtn}>
                <img src={share} />
                <span>링크 복사</span>
              </div>
            </div>
          )}
          {type === 'addLink' && (
            <ul className={css.selectBox}>
              {filterList.map(el => {
                return (
                  <li key={el.id}>
                    <button
                      className={css.selectBtn}
                      onClick={() => {
                        handleFolderList(el.id);
                      }}
                    >
                      <span className={css.linkName}>{el.name}</span>
                      <span className={css.linkCount}>
                        {el.link.count}개 링크
                      </span>
                      {selectFolderList.includes(el.id) && (
                        <img className={css.check} src={check} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {TITLE_LIST[type].button !== '' && (
            <Cta
              size="modal"
              color={TITLE_LIST[type].color}
              text={TITLE_LIST[type].button}
              action={() => {}}
            />
          )}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;

const TITLE_LIST = {
  modify: { title: '폴더 이름 변경', button: '변경하기' },
  add: { title: '폴더 추가', button: '추가하기' },
  share: { title: '폴더 공유', button: '' },
  deleteIcon: { title: '폴더 삭제', button: '삭제하기', color: 'warning' },
  linkDelete: { title: '링크 삭제', button: '삭제하기', color: 'warning' },
  addLink: { title: '폴더에 추가', button: '추가하기' },
};
