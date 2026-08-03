import QuotePanel from "../components/QuotePanel";
import BooksPanel from "../components/BooksPanel";
import InspirationalCarousel from "../components/InspirationalCarousel";

function Home() {
  return (
    <main className="container mt-5">
      <div className="row">

        <div className="col-md-4">
          <QuotePanel />
          <BooksPanel />
        </div>

        <div className="col-md-8">
          <InspirationalCarousel />
        </div>

      </div>
    </main>
  );
}

export default Home;