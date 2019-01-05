import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';

class News extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  };
  static defaultProps = {
    name: "Emrullah"
  }
  render() {
    const elements = this.props.news.map(news =>
      <NewsItem
        key={news.id}
        newsData={news} />
    );
    return (
      <div>
        {this.props.name}
        {elements}
        <NewsForm addNews={this.props.addNews} />
      </div>
    )
  }
}

export default News;