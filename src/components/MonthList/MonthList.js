import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
    render() {
        return (
            <ul>
                {this.props.calendar.map(monthItem => 
                    <MonthItem
                        key={monthItem.id}
                        id={monthItem.id}
                        month={monthItem.name}
                        onMonthClick={this.props.onMonthClick}
                    />
                )}
            </ul>
        );
    }
}

export default MonthList;