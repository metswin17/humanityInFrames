const OPEN_LIBRARY_URL =
  "https://openlibrary.org/search.json" +
  "?q=personal+growth" +
  "&fields=key,title,author_name,first_publish_year,cover_i" +
  "&limit=12";

const FALLBACK_BOOK = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  firstPublishYear: 1988,
  coverUrl: "",
  bookUrl: "https://openlibrary.org/search?q=The+Alchemist+Paulo+Coelho",
};

async function requestBooks() {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {
    const response = await fetch(OPEN_LIBRARY_URL, {
      headers: {
        "User-Agent": "HumanityInFrames/1.0",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Open Library responded with ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export default async function handler() {
  try {
    let data;

    try {
      data = await requestBooks();
    } catch (firstError) {
      console.warn("First Open Library request failed:", firstError.message);

      // Wait briefly, then try one more time.
      await new Promise((resolve) => setTimeout(resolve, 750));

      data = await requestBooks();
    }

    const usableBooks = data.docs.filter(
      (book) =>
        book.title &&
        book.author_name?.length &&
        book.key
    );

    if (usableBooks.length === 0) {
      throw new Error("Open Library returned no usable books.");
    }

    const randomIndex = Math.floor(
      Math.random() * usableBooks.length
    );

    const selectedBook = usableBooks[randomIndex];

    const workPath = selectedBook.key.startsWith("/")
      ? selectedBook.key
      : `/works/${selectedBook.key}`;

    const book = {
      title: selectedBook.title,
      author: selectedBook.author_name[0],
      firstPublishYear:
        selectedBook.first_publish_year ?? "Year unavailable",
      coverUrl: selectedBook.cover_i
        ? `https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`
        : "",
      bookUrl: `https://openlibrary.org${workPath}`,
    };

    return new Response(JSON.stringify(book), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    console.error("Book function failed:", error);

    // The panel remains usable even during an Open Library outage.
    return new Response(JSON.stringify(FALLBACK_BOOK), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}