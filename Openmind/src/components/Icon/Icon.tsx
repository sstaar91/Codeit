import iconList from './iconList';

interface Props {
  title: string;
  width?: number | string;
}

const Icon = ({ title, width = 'inherit' }: Props) => {
  return <img src={iconList[title]} alt={`${title} icon`} width={width} />;
};

export default Icon;
