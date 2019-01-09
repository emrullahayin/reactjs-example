import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: "",
      errorValid: false,
      errorText: ""
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
    if (text.length) {
      if (data.length) {
        for (var i = 0; i < data.length; i++) {
          errorValid = false;
          if (data[i] === text) {
            errorValid = true;
          }
        }
        if (errorValid === false) data.push(text)
      } else {
        data.push(text)
      }
      this.setState(() => ({
        errorValid
      }))
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
    let { data, errorValid, errorText, text } = this.state;
    if (text.length > 0) {
      errorText = "You have entered the same value."
    } else {
      errorText = "Please enter a value."
    }
    return (
      <div>
        <input
          className={errorValid === true ? "error" : ""}
          type="search"
          placeholder="Value..."
          onChange={this.handleChange} />
        <button
          type="button"
          onClick={this.handleAddItem}>Add</button>
        {errorValid === true &&
          <div className="alert error">{errorText}</div>
        }
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item}<del onClick={this.handleDeleteItem.bind(this, item)}>Delete</del></li>
          })}
        </ul>
      </div >
    )
  }
}

export default App
