import React from 'react';

import Filters from '@Compo/Filters';
import Loader from '@Compo/reusable/Loader';
import { IArticlesProps } from './Articles';
import styles from './Articles.module.scss';
import Article from './components/Article';
import GetMore from './components/GetMore';

const Articles = ({ articles, isLoading }: IArticlesProps) => {
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
          <li className={styles.loadingItem}>{isLoading && <Loader />}</li>
        </ul>
        {!isLoading && <GetMore />}
      </section>
    </div>
  );
};

export default Articles;
