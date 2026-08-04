const GOOGLE_BOOKS_URL =
  "https://www.googleapis.com/books/v1/volumes" +
  "?q=subject:self-help" +
  "&langRestrict=en" +
  "&maxResults=30";

const FALLBACK_BOOKS = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    firstPublishYear: "1988",
    coverUrl: "",
    bookUrl:
      "https://books.google.com/books?q=The+Alchemist+Paulo+Coelho",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    firstPublishYear: "1946",
    coverUrl: "",
    bookUrl:
      "https://books.google.com/books?q=Man%27s+Search+for+Meaning",
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    firstPublishYear: "1997",
    coverUrl: "",
    bookUrl:
      "https://books.google.com/books?q=The+Four+Agreements",
  },
];

function selectRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export default async function handler() {
  try {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    const response = await fetch(GOOGLE_BOOKS_URL, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Google Books responded with ${response.status}`
      );
    }

    const data = await response.json();

    const usableBooks = (data.items ?? []).filter((item) => {
      const info = item.volumeInfo;

      return (
        info?.title &&
        info?.authors?.length &&
        (info.infoLink || item.id)
      );
    });

    if (usableBooks.length === 0) {
      throw new Error("Google Books returned no usable books.");
    }

    const selectedBook = selectRandom(usableBooks);
    const info = selectedBook.volumeInfo;

    const book = {
      title: info.title,
      author: info.authors[0],
      firstPublishYear:
        info.publishedDate?.slice(0, 4) ?? "Year unavailable",
      coverUrl:
        info.imageLinks?.thumbnail
          ?.replace("http://", "https://") ?? "",
      bookUrl:
        info.infoLink ??
        `https://books.google.com/books?id=${selectedBook.id}`,
    };

    return new Response(JSON.stringify(book), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Google Books request failed:", error);

    return new Response(
      JSON.stringify(selectRandom(FALLBACK_BOOKS)),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}