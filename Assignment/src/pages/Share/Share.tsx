import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import css from './Share.module.scss';

interface Folder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: Links[];
}

interface Links {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
const Share = () => {
  const [folderList, setFolderList] = useState<Folder>();

  const getFolderList = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/folder',
      );
      const result = await response.json();
      setFolderList(result.folder);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFolderList();
  }, []);

  if (!folderList?.id) return <></>;

  const { owner, links } = folderList;

  return (
    <section>
      <div className={css.titleWrap}>
        <img
          className={css.userImg}
          src={owner.profileImageSource}
          alt="user profile"
        />
        <span className={css.userName}>{owner.name}</span>
        <h2 className={css.title}>{folderList.name}</h2>
      </div>
      <article className={css.shareWrap}>
        <div className={css.searchBox}>
          <img src="/icons/i_search.svg" alt="search" />
          <input className={css.searchBar} placeholder="링크를 검색해보세요" />
        </div>
        <div className={css.cardBox}>
          {links.map(info => {
            return <Card key={info.id} {...info} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default Share;
