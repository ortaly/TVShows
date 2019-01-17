import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';
import SearchBox from './components/SearchBox';
import Shows from './components/ShowCards';
import { getShowsService } from './services/ShowsService';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    }
  }
  
  onShowNameType = (query) => {
    getShowsService(query).then((data) => {
      this.setState({
        shows: data
      })
    });
  }
  
  render() {
    const {shows} = this.props;
    return (
      <div>
        <SearchBox handleInputChange={this.onShowNameType}/>
        <Shows showsList={this.state.shows} />
      </div>
    );
  }
}

