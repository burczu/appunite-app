import React from 'react';

import format from 'date-fns/format';
import { IArticleProps } from './Article';
import styles from './Article.module.scss';

const Article = ({ article, goBack }: IArticleProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Article title</h2>
      <button className={styles.goBack} onClick={goBack}>
        Return to articles list
      </button>
      {article && (
        <article className={styles.article}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={article.urlToImage || '/no-image.png'}
              alt={`Image related to the article titled ${article.title}`}
            />
          </div>
          <div className={styles.contentWrapper}>
            <section className={styles.meta}>
              <span className={styles.date}>
                {format(new Date(article.publishedAt), 'MMM dd, yyy')}
              </span>
              <span className={styles.author}>{article.author}</span>
              {article.source.url && (
                <a href={article.source.url} className={styles.source}>
                  {article.source.name}
                </a>
              )}
              {!article.source.url && (
                <span className={styles.source}>{article.source.name}</span>
              )}
            </section>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <section className={styles.content}>{article.content}</section>
            <section className={styles.links}>
              <a
                className={styles.link}
                href={article.url}
                title={article.title}
              >
                Go to source
              </a>
            </section>
          </div>
        </article>
      )}
    </div>
  );
};

export default Article;
