import React, { Component } from 'react';

export default class SearchBox extends Component {
  
  //prevent copy function on each render
  onTypeName = (e) => {
    this.props.handleInputChange(e.target.value)
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search Shows"
          ref={input => this.search = input}
          onChange={(e) => this.onTypeName(e)}
        />
      </form>
    )
  }

}