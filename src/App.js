import React, {Component} from 'react';

// Import children components
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';

// Import milligram for the styles
import 'milligram';

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            selectedNote: {}
        };
        this.addSimpleNote = this.addSimpleNote.bind(this);
        this.updateSimpleNote = this.updateSimpleNote.bind(this);
        this.selectNote = this.selectNote.bind(this);
        this.generatedId = this.generatedId.bind(this);
    }

    // Method to update a note
    updateSimpleNote(body) {
        let notes = this.state.notes;
        let currentNote = this.state.selectedNote;
        currentNote.body = body;
        this.setState({selectedNote: currentNote});
        let nIndex = notes.findIndex((n) => {
            return n.id === currentNote.id;
        });
        notes[nIndex] = currentNote;
        this.setState({notes: notes});
    }

    // Method to add a note
    addSimpleNote() {
        const guid = this.generatedId();
        const note = {
            id: guid,
            body: 'New note...'
        };
        const newNotes = this.state.notes;
        newNotes.push(note);
        this.setState({notes: newNotes});
        this.selectNote(note);
    }

    // Select a note from the sidebar
    selectNote(note) {
        if (note === this.state.selectedNote)
            return;
        this.setState({selectedNote: note});
    }

    // Generate an unique id
    generatedId() {
        return this.genNumber() + this.genNumber() + '-' + this.genNumber() + '-' + this.genNumber() + '-' + this.genNumber() + this.genNumber() + this.genNumber();
    }

    // Get one digit
    genNumber() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    // Render the component
    render() {
        return (<div className="App container">
            <h1>Gatop Notes</h1>
            <div className="row">
                <Sidebar add={this.addSimpleNote} select={this.selectNote} selected={this.state.selectedNote} notes={this.state.notes}/>
                <Editor change={this.updateSimpleNote} currentNote={this.state.selectedNote}/>
            </div>
        </div>);
    }
}

export default App;
