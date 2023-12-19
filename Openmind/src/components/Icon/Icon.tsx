import iconList from './iconList';

interface Props {
  title: string;
}

const Icon = ({ title }: Props) => {
  return <img src={iconList[title]} alt={`${title} icon`} />;
};

export default Icon;
