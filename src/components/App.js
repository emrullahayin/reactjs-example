import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: "",
      errorValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  };
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  };
  handleAddItem() {
    let { text, data, errorValid } = this.state;
    debugger;
    if (text.length) {
      if (data.length) {
        for (var i = 0; i < data.length; i++) {
          if (data[i] === text) {
            errorValid = true;
          }
        }
        if (errorValid === false) data.push(text)
      } else {
        data.push(text)
      }
      this.setState(
        this.state
      )
    }
  }
  handleDeleteItem(item) {
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i] === item) {
        delete this.state.data[i]
      }
    }
    this.setState(
      this.state
    )
  }
  render() {
    let { data, errorValid } = this.state;
    return (
      <div>
        <input
          className={errorValid === true ? "error" : ""}
          type="search"
          placeholder="Ekle"
          onChange={this.handleChange} />
        <button
          type="button"
          onClick={this.handleAddItem}>Add</button>
        <ul>
          {data.map((item, index) => {
            return <li key={index} onClick={this.handleDeleteItem.bind(this, item)}>{item}<del>Delete</del></li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
