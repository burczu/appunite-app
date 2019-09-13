import React from 'react';

import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { IArticleProps } from './Article';
import styles from './Article.module.scss';

const Article = ({
  author,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}: IArticleProps) => (
  <article className={styles.article}>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={urlToImage || '/no-image.png'}
        alt={`Image attached to article titled "${title}"`}
      />
    </div>
    <section className={styles.meta}>
      <span className={styles.date}>
        {format(new Date(publishedAt), 'MMM dd, yyy')}
      </span>
      <span className={styles.author}>{author}</span>
      {source.url && (
        <a href={source.url} className={styles.source}>
          {source.name}
        </a>
      )}
      {!source.url && <span className={styles.source}>{source.name}</span>}
    </section>
    <h2 className={styles.title}>{title}</h2>
    <section className={styles.content}>{description}</section>
    <section className={styles.links}>
      <Link className={styles.link} to={`/articles/${url}`}>
        Read more
      </Link>
    </section>
  </article>
);

export default Article;
