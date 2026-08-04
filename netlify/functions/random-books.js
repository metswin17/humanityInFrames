const OPEN_LIBRARY_URL =
  "https://openlibrary.org/search.json?q=personal+growth&limit=20";

export default async function handler() {
  try {
    const response = await fetch(OPEN_LIBRARY_URL, {
      headers: {
        "User-Agent": "HumanityInFrames/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`Open Library responded with ${response.status}`);
    }

    const data = await response.json();

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

    const book = {
      title: selectedBook.title,
      author: selectedBook.author_name[0],
      firstPublishYear:
        selectedBook.first_publish_year ?? "Year unavailable",
      coverUrl: selectedBook.cover_i
        ? `https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`
        : "",
      bookUrl: `https://openlibrary.org${selectedBook.key}`,
    };

    return new Response(JSON.stringify(book), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Book function failed:", error);

    return new Response(
      JSON.stringify({
        error: "Unable to retrieve a book.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}