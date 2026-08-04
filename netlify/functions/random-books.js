const OPEN_LIBRARY_URL =
  "https://openlibrary.org/subjects/self_help.json?limit=20";

const FALLBACK_BOOK = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  firstPublishYear: 1988,
  coverUrl: "",
  bookUrl:
    "https://openlibrary.org/search?q=The+Alchemist+Paulo+Coelho",
};

export default async function handler() {
  try {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 12000);

    const response = await fetch(OPEN_LIBRARY_URL, {
      headers: {
        "User-Agent": "HumanityInFrames/1.0",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Open Library responded with ${response.status}`
      );
    }

    const data = await response.json();

    const usableBooks = data.works.filter(
      (book) =>
        book.title &&
        book.authors?.length &&
        book.key
    );

    if (usableBooks.length === 0) {
      throw new Error(
        "Open Library returned no usable books."
      );
    }

    const randomIndex = Math.floor(
      Math.random() * usableBooks.length
    );

    const selectedBook = usableBooks[randomIndex];

    const book = {
      title: selectedBook.title,
      author: selectedBook.authors[0].name,
      firstPublishYear:
        selectedBook.first_publish_year ??
        "Year unavailable",
      coverUrl: selectedBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${selectedBook.cover_id}-M.jpg`
        : "",
      bookUrl: `https://openlibrary.org${selectedBook.key}`,
    };

    return new Response(JSON.stringify(book), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Book function failed:", error);

    return new Response(
      JSON.stringify(FALLBACK_BOOK),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}