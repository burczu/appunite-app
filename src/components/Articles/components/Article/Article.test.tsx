import React from 'react';

import format from 'date-fns/format';
import { shallow } from 'enzyme';
import { IArticleProps } from './Article';
import Article from './Article.component';

describe('Articles component', () => {
  const props: IArticleProps = {
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

  it('should render image with correct url', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('img').prop('src')).toEqual(props.urlToImage);
  });

  it('should render correctly formatted date', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('.date').text()).toEqual(
      format(new Date(props.publishedAt), 'MMM dd, yyy'),
    );
  });

  it('should render author', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('.author').text()).toEqual(props.author);
  });

  it('should render source', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('.source').text()).toEqual(props.source.name);
  });

  it('should render title', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('.title').text()).toEqual(props.title);
  });

  it('should render description', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('.content').text()).toEqual(props.description);
  });

  it('should render link with correct url', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find('.link').prop('to')).toEqual(`/articles/${props.url}`);
  });

  it('should not render description', () => {
    const wrapper = shallow(<Article {...props} />);

    expect(wrapper.find(props.description)).toHaveLength(0);
  });
});
