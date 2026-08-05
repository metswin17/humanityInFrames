const ZEN_QUOTES_URL = "https://zenquotes.io/api/random";

const FALLBACK_QUOTES = [
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
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
    }, 8000);

    const response = await fetch(ZEN_QUOTES_URL, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`ZenQuotes responded with ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("ZenQuotes returned no quote.");
    }

    return new Response(
      JSON.stringify({
        text: data[0].q,
        author: data[0].a,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("ZenQuotes request failed:", error);

    return new Response(
      JSON.stringify(selectRandom(FALLBACK_QUOTES)),
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