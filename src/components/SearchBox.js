import React, { Component } from 'react';

export default class SearchBox extends Component {
  
  render() {
    const {handleInputChange} = this.props;

    return (
      <form>
        <input
          placeholder="Search Shows"
          ref={input => this.search = input}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </form>
    )
  }

}