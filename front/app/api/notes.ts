import * as uuid from "uuid";
import Note from "./note.model";

let notes = Array(10).fill(0).map((e, i) =>
    new Note({id: uuid.v4(), title: `Title ${i}`, text: `Some text for note ${i}`})
);

export default class Notes {

    private static lastEdited: Note = notes[0];

    list(): Array<Note> {
        return Object.freeze(notes);
    }

    create(newNote: Note) {
        const withId: Note = Object.assign({}, newNote, {id: uuid.v4()})
        notes = [...notes, withId]
        Notes.lastEdited = withId
    }

    update(actualNote: Note) {
        notes = notes.map(note => note.id === actualNote.id ? actualNote : note);
        Notes.lastEdited = actualNote
    }

    delete(id: string) {
        notes = notes.filter(note => note.id !== id);
        Notes.lastEdited = notes[0]
    }

    lastEdited() {
        return Notes.lastEdited
    }
}