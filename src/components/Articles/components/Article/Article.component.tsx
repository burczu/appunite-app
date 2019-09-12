import React from 'react';

import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { IArticleProps } from './Article';
import styles from './Article.module.scss';

const Article = ({
  author,
  content,
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
        src={urlToImage}
        alt={`Image attached to article titled "${title}"`}
      />
    </div>
    <section className={styles.meta}>
      <span>{format(new Date(publishedAt), 'MMM dd, yyy')}</span>
      <span>{author}</span>
      <span>{source.name}</span>
    </section>
    <h2 className={styles.title}>{title}</h2>
    <section className={styles.content}>{content}</section>
    <section className={styles.links}>
      <Link className={styles.link} to={`/articles/${url}`}>
        Read more
      </Link>
    </section>
  </article>
);

export default Article;
