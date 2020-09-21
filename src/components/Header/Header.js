import React, { Component } from 'react';

class Header extends Component {
    render() {
        if(this.props.month === '') {
            return (
                <header className="App-header">  
                <h1 className="App-title">Select a Month</h1>
                <h3>Make A Selection</h3>
                <br/>
                </header>
            );
        }
        else {
            return (
                <header className="App-header">  
                <h1 className="App-title">Select a Month</h1>
                <h3>{this.props.month}</h3>
                <br/>
                </header>
                
            );
        }
    }
}

export default Header;