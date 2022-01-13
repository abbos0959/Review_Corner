import React, { useState, useEffect } from "react";
import "./App.css";
import { Addnote } from "./components/Addnote";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";
import { nanoid } from "nanoid";

function App() {
  const Initialstate = [
    { id: nanoid(), text: "salom dunyo", date: "13/01/2022" },

    { id: nanoid(), text: "bugun 14 yanvar", date: "14/01/2022" },

    {
      id: nanoid(),
      text: "bugun bizga sessiya boshlanadi",
      date: "24/01/2022",
    },
  ];

  const [notes, setNotes] = useState(Initialstate);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const addNotes = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newi = notes.filter((a) => a.id !== id);
    setNotes(newi);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handletoggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNotes}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
