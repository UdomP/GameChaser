// JavaScript source code
import React, { Component } from 'react';

class gameTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            queries: [
                { game: 'Overwatch', name: 'Druples', size: 3, time: '4pm', notes: 'Tryhards only' }
            ]
        }
    }

    renderTableData() {
        return this.state.queries.map((queries, index) => {
            const { game, name, size, time, notes } = queries
            return (
                <tr key={size}>
                <td>{game}</td>
                <td>{name}</td>
                <td>{size}</td>
                <td>{time}</td>
                    <td>{notes}</td>
                    </tr>
                )
        })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.queries[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1>This is a test</h1>
            </div>
            )
    }
    }

export default gameTable
