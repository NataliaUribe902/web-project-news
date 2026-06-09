const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;

export async function getNews(query = "") {
  try {
    const url = query
      ? `https://content.guardianapis.com/search?q=${query}&show-fields=trailText,bodyText&api-key=${API_KEY}`
      : `https://content.guardianapis.com/search?show-fields=trailText,bodyText&api-key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    return data.response.results;
  } catch (error) {
    console.error("Error loading news:", error);
    return [];
  }
}
