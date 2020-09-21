import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header';

class App extends Component {

  state = {
    calendar: [],
    month: ''
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

  onMonthClick = (month) => {
    this.setState({
      month: month
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          month={this.state.month}
        />
        <br/>
        <MonthList 
          calendar={this.state.calendar}
          onMonthClick={this.onMonthClick}
        />
      </div>
    );
  }
}

export default App;
