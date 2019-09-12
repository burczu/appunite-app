import React from 'react';

import Filters from '@Compo/Filters';
import { IArticlesProps } from './Articles';
import styles from './Articles.module.scss';

const Articles = ({ articles }: IArticlesProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <Filters />
      <section className={styles.articles}>
        <ul>
          {/*using index here is an anti-pattern but the API*/}
          {/*does not provide any useful identifier...*/}
          {articles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Articles;
