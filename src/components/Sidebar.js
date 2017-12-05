import React, {Component} from 'react';

class Sidebar extends Component {

    // Get a list to render with the notes
    renderList() {
        let list = [];
        this.props.notes.forEach((note) => {
            list.push(<li key={note.id} onClick={() => this.props.select(note)} className={note.id === this.props.selected.id
                    ? 'selected'
                    : ''}>
                {note.body}
            </li>);
        });
        return list;
    }

    render() {
        return (<div className="sidebar column column-20">
            <button className="button button-clear" onClick={this.props.add}>+ new note</button>
            <dl className="list-notes">
                {this.renderList()}
            </dl>
        </div>);
    }
}

export default Sidebar;
