import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import museum1 from "../../images/museum1.jpg";
import museum from "../../images/museum.jpg";

import { getNews } from "../../services/guardianApi";
import "./Museum.css";

function Museum() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const news = await getNews();
      setArticles(news.slice(0, 4));
    }

    loadNews();
  }, []);

  if (articles.length < 4) {
    return <p>Loading...</p>;
  }

  return (
    <section className="museum">
      <h3 className="museum__title">MUSEUM</h3>
      <div className="museum__grid">
        {/* Fila 1 */}
        <img
          src={museum1}
          alt={articles[0].webTitle}
          className="museum__image"
        />

        <div className="museum__content">
          <span className="museum__tag">{articles[0].sectionName}</span>

          <h3 className="museum__headline">{articles[0].webTitle}</h3>

          <p
            className="museum__description"
            dangerouslySetInnerHTML={{
              __html: articles[0].fields?.trailText || "",
            }}
          ></p>

          <a
            href={articles[0].webUrl}
            className="museum__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ ALL
            <FontAwesomeIcon icon={faLocationArrow} className="museum__icon" />
          </a>
        </div>

        <img
          src={museum}
          alt={articles[1].webTitle}
          className="museum__image"
        />

        <div className="museum__content">
          <span className="museum__tag">{articles[1].sectionName}</span>

          <h3 className="museum__headline">{articles[1].webTitle}</h3>

          <p
            className="museum__description"
            dangerouslySetInnerHTML={{
              __html: articles[1].fields?.trailText || "",
            }}
          ></p>

          <a
            href={articles[1].webUrl}
            className="museum__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ ALL
            <FontAwesomeIcon icon={faLocationArrow} className="museum__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Museum;
