import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';

class App extends Component {

  state = {
    calendar: []
  }

  componentDidMount = () => {
    this.getMonths();
  }

  getMonths = () => {
    axios({
      method: 'GET',
      url: `/calendar`
    }).then(response => {
      console.log('Response in GET:', response);

      this.setState({
        calendar: response.data
      });
    }).catch(err => {
      console.error('Error in GET:', err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br/>
        </header>
        <br/>
        <MonthList 
          calendar={this.state.calendar}
        />
      </div>
    );
  }
}

export default App;
