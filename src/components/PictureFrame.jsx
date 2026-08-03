import "./PictureFrame.css";

function PictureFrame({ src, alt }) {
  return (
    <div className="picture-frame">
      <img
        src={src}
        alt={alt}
        className="frame-image"
      />
    </div>
  );
}

export default PictureFrame;