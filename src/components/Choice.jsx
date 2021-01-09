import React from 'react';
import Table from './Table';
import Board from './Board';


class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <div className="Choice">
                <h2>{this.props}
                </h2>
                
            </div>
        )
    }
}

export default Choice;