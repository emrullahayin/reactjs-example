import React, { Component } from 'react';
import News from './News';

const news = [{
  id: 1,
  title: "title 1",
  description: "description 1"
}, {
  id: 2,
  title: "title 2",
  description: "description 2"
}, {
  id: 3,
  title: "title 3",
  description: "description 3"
}];

class App extends Component {
  addNews(){
    console.log('AddNews Eklendi');
    news.push({
      id: 4,
      title: "title 4",
      description: "description 4"
    });
  };
  render() {
    return (
      <div className="App">
        <News news={news} addNews={this.addNews} />
      </div>
    );
  }
}

export default App;