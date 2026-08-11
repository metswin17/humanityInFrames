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

<div className="carousel-poem">
  <p>
    Expand your Mind to Understand,
    we all must Live in Peace.<br />
    Extend your Hand to help the Plan
    of Love to all Humankind on Earth.
  </p>

  <div className="carousel-poem-author">
    — Lonnie Liston Smith
  </div>
</div>
</div>

<section className="journey-note">
  <h3>Continue Exploring</h3>

  <p className="journey-formats">
    Read • Listen • Watch
  </p>

  <p className="journey-description">
    Stories, audio reflections, and videos are linked below.
  </p>
</section>

</div> {/* closes row */}

<section className="story-bar">
  <h2>Stories of Humanity</h2>


  <div className="story-links">
    <a
      href="https://dailyinspiredlife.com/falling-in-love-with-the-one-by-hannah-teslin/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Falling for the One
    </a>

    <a
      href="https://storycorps.org/stories/paquita-williams-and-laura-lane/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Train to the Heart
    </a>

    <a
      href="https://storycorps.org/animation/two-by-two/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Two by Two Wedding
    </a>

    <a
      href="https://www.youtube.com/watch?v=5820t-xwLrk"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Boy and the Butterfly
    </a><a
      href="https://storycorps.org/podcast/what-were-made-of/"
      target="_blank"
      rel="noopener noreferrer"
    >
      What We're Made Of
    </a>

    <a
      href="https://storycorps.org/stories/18-years-after-katrina-a-grocer-rebuilds-his-community-one-shop-at-a-time/"
      target="_blank"
      rel="noopener noreferrer"
    >
      After Katrina, A Grocer Rebuilds
    </a>

    <a
      href="https://dailyinspiredlife.com/mother-daughter-relationship-reset-with-saniya-india/#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Mother Daughter Relationsh Reset
    </a>

    <a
      href="https://dailyinspiredlife.com/storms-and-rainbows-my-triumph-over-domestic-abuse/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Storms and Rainbows
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

<p className="frame-reflection">
  Every quote begins with a thought.
  Every book explores an idea.
  Every story reminds us we are human.
</p>

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