const QUOTE_API_URL = "https://zenquotes.io/api/random";

export async function getRandomQuote() {
  const response = await fetch(QUOTE_API_URL);

  if (!response.ok) {
    throw new Error("Unable to retrieve a quote.");
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("The quote service returned no results.");
  }

  return {
    text: data[0].q,
    author: data[0].a,
  };
}