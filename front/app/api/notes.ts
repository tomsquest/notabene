import * as uuid from "uuid";
import {Note} from "./note.model";

let notes = Array(10).fill(0).map((e, i) =>
    new Note({id: uuid.v4(), title: `Title ${i}`, text: `Some text for note ${i}`})
);

let lastEditedNote: Note = notes[0];

export const list = (): Array<Note> => {
    return Object.freeze(notes);
}

export const create = (newNote: Note): void => {
    const withId: Note = Object.assign({}, newNote, {id: uuid.v4()})
    notes = [...notes, withId]
    lastEditedNote = withId
}

export const update = (actualNote: Note): void => {
    notes = notes.map(note => note.id === actualNote.id ? actualNote : note);
    lastEditedNote = actualNote
}

export const destroy = (id: string): void => {
    notes = notes.filter(note => note.id !== id);
    lastEditedNote = notes[0]
}

export const lastEdited = (): Note => {
    return lastEditedNote
}