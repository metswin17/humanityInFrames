import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { getRandomBook } from "../services/bookApi";
import bookPlaceholder from "../assets/images/book-placeholder.svg";

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
  const [showModal, setShowModal] = useState(false);

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

  async function loadAnotherBook() {
    await loadBook();
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <>
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
            <img
              src={book.coverUrl || bookPlaceholder}
              alt={`Cover of ${book.title}`}
              className="book-cover"
              referrerPolicy="no-referrer"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = bookPlaceholder;
              }}
            />

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
          type="button"
          className="inspiration-button"
          onClick={openModal}
          disabled={isLoading || Boolean(error)}
        >
          {isLoading ? "Loading..." : "View Book"}
        </button>
      </section>

      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size="lg"
        contentClassName="book-modal"
      >
        <Modal.Header closeButton className="book-modal-header">
          <Modal.Title className="book-modal-title">
            Recommended Reading
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="book-modal-content">
            <img
              src={book.coverUrl || bookPlaceholder}
              alt={`Cover of ${book.title}`}
              className="book-modal-cover"
              referrerPolicy="no-referrer"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = bookPlaceholder;
              }}
            />

            <div className="book-modal-details">
              <h2>{book.title}</h2>

              <p className="book-modal-author">
                {book.author}
              </p>

              <p>
                First published: {book.firstPublishYear}
              </p>

              <p className="book-modal-message">
                Continue exploring this title through Google Books,
                or discover another recommendation.
              </p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="book-modal-footer">
          <Button
            variant="outline-secondary"
            onClick={closeModal}
          >
            Close
          </Button>

          <Button
            variant="outline-dark"
            onClick={loadAnotherBook}
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Another Book"}
          </Button>

          {book.bookUrl && (
            <Button
              as="a"
              href={book.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="book-link-button"
            >
              Explore Book
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BooksPanel;