import { useEffect, useState } from "react";
import { getNews } from "../../services/guardianApi";
import "./TopStories.css";
import heroImage from "../../images/top-stories-hero.jpg";

function TopStories() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const news = await getNews();
      setArticles(news);
    }

    loadNews();
  }, []);

  return (
    <>
      <h1 className="top-stories__title">THE ART NEWSPAPER</h1>
      <section className="top-stories">
        <div className="top-stories__hero">
          <img
            src={heroImage}
            alt="Featured story"
            className="top-stories__hero-image"
          />
        </div>

        <div className="top-stories__articles">
          {articles.slice(0, 5).map((article) => (
            <article key={article.id} className="top-stories__article">
              <h2 className="top-stories__headline">
                <a
                  href={article.webUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="top-stories__link"
                >
                  {article.webTitle}
                </a>
              </h2>

              <p className="top-stories__date">
                {new Date(article.webPublicationDate).toLocaleDateString(
                  "es-CO",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  },
                )}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default TopStories;
