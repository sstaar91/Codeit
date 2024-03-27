interface Props {
  value:string;
  uploadImage:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const ImageBox = ({value, uploadImage}:Props) => {
  return (
    <>
      <label htmlFor="imageUpload" className="flexCenterColumn row-span-3 h-[150px] w-full bg-transparent border-dashed border-2 rounded-lg">
        {value ? (
          <img src={value} alt="미리보기 이미지" />
        ) : (
          <div>
            <div>이미지 추가하기</div>
          </div>
        )}
      </label>
      <input id="imageUpload" type="file" className="hidden" onChange={uploadImage} />
    </>
  );
};

export default ImageBox;

// .imageLabel {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;

//     width: 100%;
//     height: 283px;
//     background-color: $gray_10;
//     border: 1px solid $gray_30;
//     border-radius: 5px;
//     margin-top: 10px;
//     color: $gray_50;
//     overflow: hidden;

//     cursor: pointer;
//   }

//   .preview {
//     width: 100%;
//     object-fit: cover;
//     object-position: center;
//   }
