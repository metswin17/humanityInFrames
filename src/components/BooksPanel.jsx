import { useEffect, useState } from "react";
import { getRandomBook } from "../services/bookApi";

function BooksPanel() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    firstPublishYear: "",
    coverUrl: "",
    bookUrl: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBook() {
    try {
      setIsLoading(true);
      setError("");

      const newBook = await getRandomBook();
      setBook(newBook);
    } catch (error) {
      console.error("Book request failed:", error);
      setError("Unable to load a recommended book.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <section className="books-panel mt-4">
      <h2 className="panel-heading">Recommended Reading</h2>

      {isLoading && (
        <p className="book-description">
          Looking through the library...
        </p>
      )}

      {!isLoading && error && (
        <p className="quote-error">
          {error}
        </p>
      )}

      {!isLoading && !error && (
        <>
          {book.coverUrl && (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="book-cover"
            />
          )}

          <h3 className="book-title">
            {book.title}
          </h3>

          <p className="book-author">
            {book.author}
          </p>

          <p className="book-description">
            First published: {book.firstPublishYear}
          </p>
        </>
      )}

      <button
        className="inspiration-button"
        onClick={loadBook}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "View Book"}
      </button>
    </section>
  );
}

export default BooksPanel;