const BOOK_API_URL =
  "https://humanityinframesbck.onrender.com/api/books";

export async function getRandomBook() {
  const response = await fetch(BOOK_API_URL);

  if (!response.ok) {
    throw new Error("Unable to retrieve a book.");
  }

  const data = await response.json();

  return {
    title: data.title,
    author: data.author,
    firstPublishYear: data.firstPublishYear,
    coverUrl: data.coverUrl,
    bookUrl: data.bookUrl,
  };
}
