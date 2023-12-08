import './Content.scss';

const Content = ({ frontTitle, accent, backTitle, description, img }) => {
  return (
    <article className="mainInfoBox">
      <div className="mainSubTitleBox">
        <h3 className="mainSubTitle">
          {frontTitle}
          <span className={`${img} accent`}>{accent}</span>
          {backTitle}
        </h3>
        <p className="subDescription">{description}</p>
      </div>
      <img src={`./images/example_${img}.png`} alt={`example link ${img}`} />
    </article>
  );
};

export default Content;
