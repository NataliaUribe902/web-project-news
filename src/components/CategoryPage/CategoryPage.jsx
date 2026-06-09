import "./CategoryPage.css";
import { useState, useEffect, Fragment } from "react";
import { getNews } from "../../services/guardianApi";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ArticleShowcase from "../ArticleShowcase/ArticleShowcase";

function CategoryPage({ title, images, newsQuery, showcaseTitle }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const news = await getNews(newsQuery);
      setArticles(news.slice(0, 6));
    }

    loadNews();
  }, [newsQuery]);

  return (
    <>
      <Header />

      <main className="category-page">
        <section className="category-page__hero">
          <h1 className="category-page__heading">{title}</h1>
        </section>

        <section className="category-page__articles">
          {articles.map((article, index) => (
            <Fragment key={article.id}>
              <article className="category-page__card">
                <div className="category-page__header">
                  <h2 className="category-page__title">{article.webTitle}</h2>

                  <div className="category-page__meta">
                    <span className="category-page__label">SECTION</span>

                    <p className="category-page__section">
                      {article.sectionName}
                    </p>
                  </div>

                  <div className="category-page__divider"></div>

                  <p className="category-page__description">
                    {article.fields?.trailText ||
                      "Read more about this story from The Guardian."}
                  </p>

                  <a
                    className="category-page__button"
                    href={article.webUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    READ ARTICLE
                  </a>
                </div>

                <img
                  className="category-page__image"
                  src={images[index]}
                  alt={article.webTitle}
                />
              </article>

              {index === 2 && <ArticleShowcase title={showcaseTitle} />}
            </Fragment>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CategoryPage;
