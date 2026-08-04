const ZEN_QUOTES_URL = "https://zenquotes.io/api/random";

export default async function handler() {
  try {
    const response = await fetch(ZEN_QUOTES_URL);

    if (!response.ok) {
      throw new Error(`ZenQuotes responded with ${response.status}`);
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({
        text: data[0].q,
        author: data[0].a,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Unable to retrieve quote.",
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