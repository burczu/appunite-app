import React from 'react';

import { IArticle, IArticleSource } from '@Model/article/types';
import format from 'date-fns/format';
import { shallow } from 'enzyme';
import md5 from 'md5';
import { IArticleProps } from './Article';
import Article from './Article.component';

describe('Articles component', () => {
  const article: IArticle = {
    author: 'test author',
    content: 'test content',
    description: 'test description',
    publishedAt: new Date().toISOString(),
    source: {
      id: 'test-id',
      name: 'test source',
    },
    title: 'test title',
    url: 'http://test.com',
    urlToImage: 'http://test.com/image.png',
  };
  const functions = {
    goBack: jest.fn(() => ''),
  };

  it('should render image with correct url', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('img').prop('src')).toEqual(article.urlToImage);
  });

  it('should render placeholder image if no image url provided', () => {
    const customArticle = { ...article };
    customArticle.urlToImage = '';
    const wrapper = shallow(
      <Article article={customArticle} goBack={functions.goBack} />,
    );

    expect(wrapper.find('img').prop('src')).toEqual('/no-image.png');
  });

  it('should render correctly formatted date', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('.date').text()).toEqual(
      format(new Date(article.publishedAt), 'MMM dd, yyy'),
    );
  });

  it('should render author', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('.author').text()).toEqual(article.author);
  });

  it('should render source', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('span.source').text()).toEqual(article.source.name);
  });

  it('should render link to source when url provided', () => {
    const customArticle = { ...article };
    customArticle.source = {
      id: 'test-id',
      name: 'test',
      url: 'http://test.com',
    };
    const wrapper = shallow(
      <Article article={customArticle} goBack={functions.goBack} />,
    );

    expect(wrapper.find('.source').prop('href')).toEqual(
      customArticle.source.url,
    );
  });

  it('should render title', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('.articleTitle').text()).toEqual(article.title);
  });

  it('should render content', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('.content').text()).toEqual(article.content);
  });

  it('should render link with correct url', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find('.link').prop('href')).toEqual(article.url);
  });

  it('should not render description', () => {
    const wrapper = shallow(
      <Article article={article} goBack={functions.goBack} />,
    );

    expect(wrapper.find(article.description)).toHaveLength(0);
  });
});
