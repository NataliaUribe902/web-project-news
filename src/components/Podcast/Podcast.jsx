import { useEffect, useState } from "react";
import { getNews } from "../../services/guardianApi";

import podcast1 from "../../images/podcast1.png";
import podcast2 from "../../images/podcast2.jpg";
import podcast3 from "../../images/podcast3.png";
import podcast4 from "../../images/podcast4.jpg";

import "./Podcast.css";

function Podcast() {
  const [articles, setArticles] = useState([]);

  const images = [podcast2, podcast4, podcast1];

  useEffect(() => {
    async function loadNews() {
      const news = await getNews("podcast");
      setArticles(news.slice(0, 3));
    }

    loadNews();
  }, []);

  if (articles.length < 3) return null;

  return (
    <section className="podcast">
      <h2 className="podcast__title">PODCASTS</h2>

      <div className="podcast__content">
        <div className="podcast__featured">
          <img
            src={podcast3}
            alt="Featured podcast"
            className="podcast__featured-image"
          />
        </div>

        <div className="podcast__list">
          {articles.map((article, index) => (
            <article key={article.id} className="podcast__item">
              <img
                src={images[index]}
                alt={article.webTitle}
                className="podcast__item-image"
              />

              <div className="podcast__info">
                <p className="podcast__date">
                  {new Date(article.webPublicationDate).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </p>

                <h3 className="podcast__headline">
                  <a
                    href={article.webUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="podcast__link"
                  >
                    {article.webTitle}
                  </a>
                </h3>

                <span className="podcast__category">{article.sectionName}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Podcast;
