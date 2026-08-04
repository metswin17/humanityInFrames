import { useEffect, useState } from "react";
import { getRandomQuote } from "../services/quoteApi";

function QuotePanel() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadQuote() {
    try {
      setIsLoading(true);
      setError("");

      const newQuote = await getRandomQuote();
      setQuote(newQuote);
    } catch (error) {
      console.error("Quote request failed:", error);

      setError("A new quote could not be loaded.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <section className="quote-panel mb-4">
      <h2 className="panel-heading">Daily Inspiration</h2>

      {isLoading && (
        <p className="quote-status">
          Finding a little inspiration...
        </p>
      )}

      {!isLoading && error && (
        <p className="quote-error">{error}</p>
      )}

      {!isLoading && !error && (
        <>
          <blockquote className="quote-text">
            “{quote.text}”
          </blockquote>

          <p className="quote-author">
            — {quote.author}
          </p>
        </>
      )}

      <button
        type="button"
        className="inspiration-button"
        onClick={loadQuote}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "New Quote"}
      </button>
    </section>
  );
}

export default QuotePanel;