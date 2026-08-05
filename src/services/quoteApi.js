const QUOTE_API_URL =
  "https://humanityinframesbck.onrender.com/api/quote";

export async function getRandomQuote() {
  const response = await fetch(QUOTE_API_URL);

  if (!response.ok) {
    throw new Error("Unable to retrieve a quote.");
  }

  const data = await response.json();

  return {
    text: data.text,
    author: data.author,
  };
}