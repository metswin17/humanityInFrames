import sailingMaine from "../assets/images/SailingMaine.jpg";

function About() {
  return (
    <main
      className="about-page"
      style={{
        backgroundImage: `url(${sailingMaine})`,
      }}
    >
      <section className="about-card">
        <h2>About Humanity in Frames</h2>

        <p>
          Humanity in Frames was created as a peaceful place to pause,
          reflect, and rediscover inspiration through thoughtful words,
          meaningful books, and beautiful imagery.
        </p>

        <p>
          Every quote, photograph, and recommendation is intended to
          encourage curiosity, compassion, and personal growth while
          reminding us of the beauty found in our shared human journey.
        </p>

        <p>
          Whether you stay for a single quote or explore every image,
          may you leave carrying a little more hope than when you arrived.
        </p>
      </section>
    </main>
  );
}

export default About;