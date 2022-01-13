import React from "react";
import { Note}  from "./Note";
import { Addnote } from "./Addnote";
export const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <Addnote HandleAddNote={handleAddNote} />
    </div>
  );
};
