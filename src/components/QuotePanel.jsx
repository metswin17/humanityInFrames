import { useEffect, useRef, useState } from "react";
import { getRandomQuote } from "../services/quoteApi";

function QuotePanel() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEmphasized, setIsEmphasized] = useState(false);

  const emphasisTimeoutRef = useRef(null);

  async function loadQuote() {
    try {
      setIsLoading(true);
      setError("");

      const newQuote = await getRandomQuote();
      setQuote(newQuote);

      setIsEmphasized(false);

      if (emphasisTimeoutRef.current) {
        clearTimeout(emphasisTimeoutRef.current);
      }

      requestAnimationFrame(() => {
        setIsEmphasized(true);
      });

      emphasisTimeoutRef.current = setTimeout(() => {
        setIsEmphasized(false);
      }, 2600);
    } catch (error) {
      console.error("Quote request failed:", error);
      setError("A new quote could not be loaded.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadQuote();

    return () => {
      if (emphasisTimeoutRef.current) {
        clearTimeout(emphasisTimeoutRef.current);
      }
    };
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
        <div
          className={
            isEmphasized
              ? "quote-content quote-emphasized"
              : "quote-content"
          }
        >
          <blockquote className="quote-text">
            “{quote.text}”
          </blockquote>

          <p className="quote-author">
            — {quote.author}
          </p>
        </div>
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