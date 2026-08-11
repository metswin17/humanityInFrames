import sailingMaine from "../assets/images/SailingMaine.jpg";
import {
  FaGlobeAmericas,
  FaLeaf,
  FaHandsHelping,
  FaDove,
  FaWater,
  FaSun,
} from "react-icons/fa";

function About() {
  return (
    <main
      className="about-page"
      style={{
        backgroundImage: `url(${sailingMaine})`,
      }}
    >
      <div className="about-layout">
      <div
  className="about-icons left-icons"
  aria-label="Earth, growth, and unity"
>
<FaGlobeAmericas aria-hidden="true" />
<FaLeaf aria-hidden="true" />
<FaHandsHelping aria-hidden="true" />
        </div>

        <section className="about-card">

<p className="about-opening-quote">
  “Every journey begins with a single horizon.”
</p>

<h2>The Story Behind Humanity in Frames</h2>

<p>
  Humanity in Frames began with a simple idea: that even a few quiet
  moments can change the direction of a day. In a world that often
  moves quickly, this space was created to encourage reflection,
  curiosity, and hope.
</p>

<p>
  Every quote, every photograph, every book recommendation and story 
    is an invitation to slow down, discover something meaningful, 
    and carry a little inspiration forward into everyday life.
</p>

<p>
  Whether your visit lasts a few moments or a little longer, my hope
  is that you leave with a renewed sense of possibility and a reminder
  that kindness, learning, and understanding continue to connect us all.
</p>

<p className="about-closing-thought">
  May every visit remind us that inspiration can be found in every
  horizon, every story, and every act of kindness.
</p>

<div className="about-signature">
  <p>With gratitude,</p>

  <h4>Luis R. Lopez</h4>

  <p>Creator, Humanity in Frames</p>

  <p className="about-motto">
    Inspire • Learn • Grow • Together
  </p>
</div>

</section>

<div
  className="about-icons right-icons"
  aria-label="Peace, water, and hope"
>
<FaDove aria-hidden="true" />
<FaWater aria-hidden="true" />
<FaSun aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}

export default About;