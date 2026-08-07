import QuotePanel from "../components/QuotePanel";
import BooksPanel from "../components/BooksPanel";
import InspirationalCarousel from "../components/InspirationalCarousel";
import PictureFrame from "../components/PictureFrame";

import skeletonLeaf from "../assets/images/skeleton-leaf.jpg";
import skeletonLeafTwo from "../assets/images/skeleton-leaf2.jpg";

import frameImageOne from "../assets/images/Journey.jpg";
import frameImageTwo from "../assets/images/NewHope.jpg";

function Home() {
  return (
    <main className="container mt-5 home-page">

      <img
        src={skeletonLeaf}
        alt=""
        aria-hidden="true"
        className="home-leaf home-leaf-top-left"
      />

      <img
        src={skeletonLeafTwo}
        alt=""
        aria-hidden="true"
        className="home-leaf home-leaf-bottom-right"
      />

      <div className="row align-items-start">
        <div className="col-md-4">
          <div className="page-reveal reveal-quote">
            <QuotePanel />
          </div>

          <div className="page-reveal reveal-book">
            <BooksPanel />
          </div>
        </div>

        <div className="col-md-8 page-reveal reveal-carousel">
          <InspirationalCarousel />
        </div>
      </div>

      <div className="decorative-frames">
        <div className="decorative-frame decorative-frame-left">
          <PictureFrame
            src={frameImageOne}
            alt="A peaceful inspirational scene"
          />
        </div>

        <div className="decorative-frame decorative-frame-right">
          <PictureFrame
            src={frameImageTwo}
            alt="A reflective outdoor scene"
          />
        </div>
      </div>

    </main>
  );
}

export default Home;