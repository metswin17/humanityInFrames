import QuotePanel from "../components/QuotePanel";
import BooksPanel from "../components/BooksPanel";
import InspirationalCarousel from "../components/InspirationalCarousel";
import PictureFrame from "../components/PictureFrame";

import skeletonLeaf from "../assets/images/vibrant-rue.jpg";
import skeletonLeafTwo from "../assets/images/pale-blues.jpg";


import frameImageOne from "../assets/images/Journey.jpg";
import frameImageTwo from "../assets/images/andsoitbegins.jpg";

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
<main className="container mt-5 home-page"></main>

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

</div> {/* closes row */}

<section className="story-bar">
  <h2>Stories of Humanity</h2>

  <p className="story-intro">
    Every quote begins with a thought.
    Every book explores an idea.
    Every story reminds us we are human.
  </p>

  <div className="story-links">
    <a
      href="YOUR_LINK_HERE"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Starfish Story
    </a>

    <a
      href="YOUR_LINK_HERE"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Two Wolves
    </a>

    <a
      href="YOUR_LINK_HERE"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Cracked Pot
    </a>

    <a
      href="YOUR_LINK_HERE"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Boy and the Butterfly
    </a>
  </div>
</section>

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