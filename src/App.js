import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';
import SearchBox from './components/SearchBox';
import Shows from './components/ShowCards';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    }
    this.onShowType = this.onShowType.bind(this);
  }
  
  onShowType = (name) => {
    this.getShowsList(name);
  }

  getShowsList = (query) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(results => results.json())
      .then(data => {
        this.setState({
          shows: data
        })
      })
  }
  
  render() {
    const {shows} = this.props;
    return (
      <div>
        <SearchBox handleInputChange={this.onShowType}/>
        <Shows showsList={this.state.shows} />
      </div>
    );
  }
}

