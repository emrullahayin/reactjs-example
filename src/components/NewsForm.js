import React, { Component } from 'react'

export class NewsForm extends Component {
  addButton(){
    console.log('Hello');
  }
  render() {
    return (
      <div>
        <button onClick={this.addButton}>Add</button>
      </div>
    )
  }
}

export default NewsForm;