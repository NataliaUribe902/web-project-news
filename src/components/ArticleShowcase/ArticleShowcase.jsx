import { useEffect, useState } from "react";
import { getNews } from "../../services/guardianApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";

import "./ArticleShowcase.css";

function ArticleShowcase({ title }) {
  const [articles, setArticles] = useState([]);

  const images = [img1, img2, img3, img4];

  useEffect(() => {
    async function loadNews() {
      const news = await getNews("books");
      setArticles(news.slice(0, 4));
    }

    loadNews();
  }, []);

  if (articles.length < 4) return null;

  return (
    <section className="books">
      <h2 className="books__title">{title}</h2>

      <div className="books__grid">
        {/* Fila 1 */}
        <img
          src={images[0]}
          alt={articles[0].webTitle}
          className="books__image"
        />

        <div className="books__content">
          <span className="books__tag">{articles[0].sectionName}</span>

          <h3 className="books__headline">{articles[0].webTitle}</h3>

          <a href={articles[0].webUrl} className="books__link">
            READ ALL
            <FontAwesomeIcon icon={faLocationArrow} className="books__icon" />
          </a>
        </div>

        <img
          src={images[1]}
          alt={articles[1].webTitle}
          className="books__image"
        />

        <div className="books__content">
          <span className="books__tag">{articles[1].sectionName}</span>

          <h3 className="books__headline">{articles[1].webTitle}</h3>

          <a href={articles[1].webUrl} className="books__link">
            READ ALL
            <FontAwesomeIcon icon={faLocationArrow} className="books__icon" />
          </a>
        </div>

        {/* Fila 2 */}
        <div className="books__content">
          <span className="books__tag">{articles[2].sectionName}</span>

          <h3 className="books__headline">{articles[2].webTitle}</h3>

          <a href={articles[2].webUrl} className="books__link">
            READ ALL
            <FontAwesomeIcon icon={faLocationArrow} className="books__icon" />
          </a>
        </div>

        <img
          src={images[2]}
          alt={articles[2].webTitle}
          className="books__image"
        />

        <div className="books__content">
          <span className="books__tag">{articles[3].sectionName}</span>

          <h3 className="books__headline">{articles[3].webTitle}</h3>

          <a href={articles[3].webUrl} className="books__link">
            READ ALL
            <FontAwesomeIcon icon={faLocationArrow} className="books__icon" />
          </a>
        </div>

        <img
          src={images[3]}
          alt={articles[3].webTitle}
          className="books__image"
        />
      </div>
    </section>
  );
}

export default ArticleShowcase;
