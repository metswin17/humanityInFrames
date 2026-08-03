function BooksPanel() {
  return (
    <section className="books-panel mt-4">
      <h2 className="panel-heading">Recommended Reading</h2>

      <div className="book-card">
        <h3 className="book-title">The Alchemist</h3>

        <p className="book-author">
          Paulo Coelho
        </p>

        <p className="book-description">
          A timeless story about following your dreams,
          discovering purpose, and listening to your heart.
        </p>

        <button type="button" className="inspiration-button">
          View Book
        </button>
      </div>
    </section>
  );
}

export default BooksPanel;