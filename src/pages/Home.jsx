import QuotePanel from "../components/QuotePanel";
import BooksPanel from "../components/BooksPanel";
import InspirationalCarousel from "../components/InspirationalCarousel";
import PictureFrame from "../components/PictureFrame";

import frameImageOne from "../assets/images/Journey.jpg";
import frameImageTwo from "../assets/images/NewHope.jpg";

function Home() {
  return (
    <main className="container mt-5">
      <div className="row align-items-start">
        <div className="col-md-4">
          <QuotePanel />
          <BooksPanel />
        </div>

        <div className="col-md-8">
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