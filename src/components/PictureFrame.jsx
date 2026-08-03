function PictureFrame({ image, alt }) {
  return (
    <div className="picture-frame">
      <img src={image} alt={alt} className="frame-image" />
    </div>
  );
}

export default PictureFrame;