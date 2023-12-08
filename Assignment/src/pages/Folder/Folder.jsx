import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

import Cta from '../../components/Cta';
import Card from '../../components/Card';
import Modal from '../../components/Modal/Modal';

import link from '/icons/i_link.svg';
import search from '/icons/i_search.svg';
import share from '/icons/i_share.svg';
import deleteIcon from '/icons/i_delete.svg';
import modify from '/icons/i_modify.svg';
import add from '/icons/i_add.svg';

import css from './Folder.module.scss';

const Folder = () => {
  const [filterList, setFilterList] = useState([]);
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentModalType, setCurrentModalType] = useState('');
  const [inputLink, setInputLink] = useState('');

  const getUserLinks = async id => {
    const query = id !== 0 ? `?folderId=${id}` : '';
    const res = await axiosInstance.get(`/users/1/links${query}`);
    setLinks(res.data.data);
  };

  const getFilterList = async () => {
    const res = await axiosInstance.get('/users/1/folders');
    setFilterList(res.data.data);
  };

  const handleFilterBtn = id => {
    setCurrentId(id);
  };

  const filterTitle =
    currentId === 0
      ? '전체'
      : filterList.filter(el => el.id === currentId)[0].name;

  const handleIconBtn = type => {
    setIsOpenModal(prev => !prev);
    setCurrentModalType(type);
  };

  const addLink = () => {
    handleIconBtn('addLink');
  };

  const imgMapping = {
    share,
    modify,
    deleteIcon,
  };

  const folderName = () => {
    if (currentModalType === 'addLink') return inputLink;
    if (currentModalType === 'add') {
      return '';
    } else {
      return filterTitle;
    }
  };

  useEffect(() => {
    getFilterList();
  }, []);

  useEffect(() => {
    getUserLinks(currentId);
  }, [currentId]);

  return (
    <section>
      <div className={css.searchLinkWrap}>
        <div className={css.linkBox}>
          <img src={link} alt="link icon" />
          <input
            className={css.linkInput}
            type="url"
            placeholder="링크를 추가하세요"
            onChange={e => {
              setInputLink(e.target.value);
            }}
          />
          <Cta size="add" text="추가하기" action={addLink} />
        </div>
      </div>
      <div className={css.resultWrap}>
        <form className={css.searchBox}>
          <img src={search} alt="search icon" />
          <input
            className={css.searchInput}
            type="text"
            placeholder="링크를 검색해 보세요."
          />
        </form>
        <div className={css.filterWrap}>
          <ul className={css.filterBox}>
            <li>
              <button
                className={`${css.filterBtn} ${
                  currentId === 0 ? css.clicked : ''
                }`}
                onClick={() => {
                  handleFilterBtn(0);
                }}
              >
                전체
              </button>
            </li>
            {filterList.map(list => {
              return (
                <li key={list.id}>
                  <button
                    className={`${css.filterBtn} ${
                      currentId === list.id ? css.clicked : ''
                    }`}
                    onClick={() => {
                      handleFilterBtn(list.id);
                    }}
                  >
                    {list.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <img src={add} alt="add icon" onClick={() => handleIconBtn('add')} />
        </div>
        <div className={css.titleBox}>
          <span className={css.filterTitle}>{filterTitle}</span>
          <div className={css.iconBox}>
            {ICON_LIST.map(el => {
              return (
                <div
                  className={css.icon}
                  key={el.id}
                  onClick={() => handleIconBtn(el.type)}
                >
                  <img src={imgMapping[el.type]} alt={`${el.type} icon`} />
                  <span>{el.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        {links.length === 0 ? (
          <div className={css.nothing}>저장된 링크가 없습니다</div>
        ) : (
          <div className={css.cardBox}>
            {links.map(list => {
              return <Card key={list.id} {...list} />;
            })}
          </div>
        )}
      </div>
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          type={currentModalType}
          folderName={folderName()}
          filterList={filterList}
        />
      )}
    </section>
  );
};

export default Folder;

const ICON_LIST = [
  { id: 1, type: 'share', name: '공유' },
  { id: 2, type: 'modify', name: '이름 변경' },
  { id: 3, type: 'deleteIcon', name: '삭제' },
];
