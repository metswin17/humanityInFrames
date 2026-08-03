function QuotePanel() {
  return (
    <section className="quote-panel mb-4">
      <h2 className="panel-heading">Daily Inspiration</h2>

      <blockquote className="quote-text">
        “The best way out is always through.”
      </blockquote>

      <p className="quote-author">— Robert Frost</p>

      <button type="button" className="inspiration-button">
        New Quote
      </button>
    </section>
  );
}

export default QuotePanel;