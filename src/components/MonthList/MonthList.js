import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
    render() {
        return (
            <ul>
                {this.props.calendar.map(monthItem => 
                    <MonthItem
                        id={monthItem.id}
                        month={monthItem.name}
                    />
                )}
            </ul>
        );
    }
}

export default MonthList;