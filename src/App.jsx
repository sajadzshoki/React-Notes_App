import React from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NoteList";

function App() {
  const [searchText, setSearchText] = React.useState("");
  const [darkMode ,setDarkMode] = React.useState(false);
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "this is the first note",
      date: "12/11/2022",
    },
    {
      id: nanoid(),
      text: "this is the second note",
      date: "14/11/2022",
    },
  ]);

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // ??????????????????
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
    <div className="App">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  );
}

export default App;
