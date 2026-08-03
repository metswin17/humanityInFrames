import Carousel from "react-bootstrap/Carousel";

import imageOne from "../assets/images/HistoricHwy.jpg";
import imageTwo from "../assets/images/Exhilirating.jpg";
import imageThree from "../assets/images/RocklandMaine.jpg";

function InspirationalCarousel() {
  return (
    <Carousel interval={15000} fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageOne}
          alt="Inspirational outdoor scene"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageTwo}
          alt="Exhilarating inspirational scene"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageThree}
          alt="Inspirational waterfront scene"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default InspirationalCarousel;