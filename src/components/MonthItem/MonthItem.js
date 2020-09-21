import React, { Component } from 'react';

class MonthItem extends Component {
    render() {
        return (
            <li 
            key={this.props.id}
            onClick={() => this.props.onMonthClick(this.props.month)}
            >
                {this.props.month}
            </li>
        );
    }
}

export default MonthItem;