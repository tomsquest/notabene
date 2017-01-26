import Note from "./note.model";

export default class Notes {

    private static notes = Array(10).fill(0).map((e, i) =>
        new Note(`${i}`, `Title ${i}`, `Some text for note ${i}`)
    );

    list(): Array<Note> {
        return Object.freeze(Notes.notes);
    }

    update(actualNote: Note) {
        Notes.notes = Notes.notes.map(note => note.id === actualNote.id ? actualNote : note);
    }

    lastEdited() {
        return Notes.notes[0];
    }
}