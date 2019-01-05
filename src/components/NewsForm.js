import React, { Component } from 'react'

export class NewsForm extends Component {
  constructor(props) {
    super();
  }
  addButton = () => {
    this.props.addNews();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addButton()}>Add</button>
      </div>
    )
  }
}

export default NewsForm;