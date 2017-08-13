import React from 'react';

import KanbanBoard from './kanban-board.jsx';
import ModalContainer from '../containers/modal-container.jsx';

export default class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className="page-header"><h1>Kanban Board</h1></div>
                <KanbanBoard />
                <ModalContainer />
            </div>
        )
    }
}