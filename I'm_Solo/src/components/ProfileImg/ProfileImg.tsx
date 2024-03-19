import defaultProfile from '/src/assets/images/defaultProfile.png';
import css from './ProfileImg.module.scss';

interface Props {
  size: string;
  url: string;
}

const ProfileImg = ({ size, url }: Props) => {
  return (
    <img
      className={`${css.profile} ${css[size]}`}
      src={url === '' ? defaultProfile : url}
      alt="profile Image"
    />
  );
};

export default ProfileImg;
