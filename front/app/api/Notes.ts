import Note from "./note.model";

export default class Notes {

    private static notes = [
        new Note("1", "title 1", "text 1"),
        new Note("2", "title 2", "text 2"),
        new Note("3", "title 3", "text 3"),
        new Note("4", "title 4", "text 4"),
        new Note("5", "title 5", "text 5"),
        new Note("6", "title 6", "text 6"),
        new Note("7", "title 7", "text 7"),
        new Note("8", "title 8", "text 8"),
    ];

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