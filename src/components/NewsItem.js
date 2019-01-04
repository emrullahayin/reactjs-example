import React, { Component } from 'react';

class NewsItem extends Component {
  // newsData: PropTypes.shape({
  //   id: PropTypes.number,
  //   title: PropTypes.string,
  //   description: PropTypes.string
  // }),
  render() {
    const { title, description} = this.props.newsData;
    return (
      <div>
        <h1 className="title">{title}</h1>
        <p>{description}</p>
      </div>
    )
  }
}

export default NewsItem;