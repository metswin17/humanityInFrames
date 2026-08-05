import Carousel from "react-bootstrap/Carousel";

import imageOne from "../assets/images/TeachPeace.jpg";
import imageTwo from "../assets/images/Exhilirating.jpg";
import imageThree from "../assets/images/RocklandMaine.jpg";
import imageFour from "../assets/images/Listen.jpg";
import imageFive from "../assets/images/LetitGo.jpg";
import imageSix from "../assets/images/Humanity.jpg";

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

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageFour}
          alt="Inspirational Quote"
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100 carousel-image"
          src={imageFour}
          alt="Inspirational Quote"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageFive}
          alt="Release"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageSix}
          alt="United"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default InspirationalCarousel;