interface Props {
  type: string;
}

const Logo = ({ type }: Props) => {
  const textSize: { [key: string]: string } = {
    sign: "text-7xl",
    nav: "text-4xl md:text-3xl sm:text-2xl",
  };

  return <h1 className={`font-dongle font-bold text-main h-fit w-fit cursor-default ${textSize[type]}`}>암쎄오</h1>;
};

export default Logo;
