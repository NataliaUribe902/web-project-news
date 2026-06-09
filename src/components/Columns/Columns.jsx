import "./Columns.css";
import { useState, useEffect } from "react";
import { getNews } from "../../services/guardianApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import column1 from "../../images/column1.jpg";
import column2 from "../../images/column2.jpg";
import column3 from "../../images/column3.jpg";
import column4 from "../../images/column4.jpg";
import column5 from "../../images/column5.jpg";
import column6 from "../../images/column6.jpg";

function Columns() {
  const [articles, setArticles] = useState([]);

  const images = [column3, column6, column1, column2, column5, column4];

  useEffect(() => {
    async function loadNews() {
      const news = await getNews("documentary");
      setArticles(news.slice(0, 6));
    }

    loadNews();
  }, []);

  return (
    <section className="columns">
      <h2 className="column__title">DOCUMENTARIES</h2>

      <div className="columns__grid">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className={`columns__card ${
              index < 2 ? "columns__card--large" : ""
            }`}
          >
            <img
              className="columns__image"
              src={images[index]}
              alt={article.webTitle}
            />

            <div className="columns__content">
              <span className="columns__category">{article.sectionName}</span>

              <h3 className="columns__title">{article.webTitle}</h3>

              <a
                href={article.webUrl}
                className="columns__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ ALL
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="columns__icon"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Columns;
