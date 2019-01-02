import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  render() {
    const elements = this.props.news.map(news =>
      <NewsItem
        key={news.id}
        title={news.title}
        description={news.description} />
    );
    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default News;