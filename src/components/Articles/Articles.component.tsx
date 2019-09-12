import React from 'react';

import Filters from '@Compo/Filters';
import { IArticlesProps } from './Articles';
import styles from './Articles.module.scss';
import Article from './components/Article';

const Articles = ({ articles }: IArticlesProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <Filters />
      <section className={styles.articles}>
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.url}>
              <Article {...article} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Articles;
