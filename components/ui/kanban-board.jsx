import React from 'react';

import Lane from './lane';

export default class KanbanBoard extends React.Component {
    render() {
        return(
            <div className = "container">
                <Lane />
                <Lane />
                <Lane />
            </div>
        )
    }
}