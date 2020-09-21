import React, { Component } from 'react';

class MonthItem extends Component {

    onMonthClick = () => {
        alert(`You clicked the month of: ${this.props.month}`);
    }

    render() {
        return (
            <li 
            key={this.props.id} // Don't know why I'm still getting the error for 'unique key prop' here because its the same as the song.js file
            onClick={() => this.onMonthClick()}
            >
                {this.props.month}
            </li>
        );
    }
}

export default MonthItem;