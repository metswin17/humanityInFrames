import Carousel from "react-bootstrap/Carousel";

import imageOne from "../assets/images/TeachPeace.jpg";
import imageTwo from "../assets/images/Exhilirating.jpg";
import imageThree from "../assets/images/RocklandMaine.jpg";
import imageFour from "../assets/images/Listen.jpg";
import imageFive from "../assets/images/LeoTolstoy.jpg";
import imageSix from "../assets/images/Humanity.jpg";
import imageSeven from "../assets/images/Believe.jpg";
import imageEight from "../assets/images/Branches.jpg";
import imageNine from"../assets/images/TakeitIn.jpg";
import imageTen from "../assets/images/DoubleRainbow.jpg";
import imageEleven from "../assets/images/Leave-people-better.png";
import imageTwelve from "../assets/images/Steeproad.jpg";
import imageThirteen from "../assets/images/AnotherDay.jpg";
import imageFourteen from "../assets/images/Leaf-translucent.jpg";
import imageFifteen from "../assets/images/lighthouse.jpg"
import imageSixteen from "../assets/images/bookflower.jpg"
import imageSeventeen from "../assets/images/Live.jpg";
import imageEighteen from "../assets/images/MotherLeaders.jpg"
import imageNineteen from "../assets/images/HumanRace.jpg"



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

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageSeven}
          alt="Believe"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageEight}
          alt="Branches"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageNine}
          alt="TakeitIn"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageTen}
          alt="DoubleRainbow"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageEleven}
          alt="Leave-people-better"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageTwelve}
          alt="Steeproad"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageThirteen}
          alt="AnotherDay"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageFourteen}
          alt="Leaf-translucent"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageFifteen}
          alt="lighthouse"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageSixteen}
          alt="bookflower"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageSeventeen}
          alt="Live"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageEighteen}
          alt="MotherLeaders"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imageNineteen}
          alt="HumanRace"
        />
      </Carousel.Item>


      
      </Carousel>

  );
}

export default InspirationalCarousel;