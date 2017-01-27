import * as uuid from "uuid";
import Note from "./note.model";

export default class Notes {

    private static notes = Array(10).fill(0).map((e, i) =>
        new Note({id: uuid.v4(), title: `Title ${i}`, text: `Some text for note ${i}`})
    );

    list(): Array<Note> {
        return Object.freeze(Notes.notes);
    }

    create(newNote: Note) {
        const withId: Note = Object.assign({}, newNote, {id: uuid.v4()})
        Notes.notes = [...Notes.notes, withId]
    }

    update(actualNote: Note) {
        Notes.notes = Notes.notes.map(note => note.id === actualNote.id ? actualNote : note);
    }

    lastEdited() {
        return Notes.notes[0];
    }
}