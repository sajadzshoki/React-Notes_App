import React from "react";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = React.useState("");
  const characterLimit = 200;

  const handleLimit = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > characterLimit) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="newNote">
      <textarea
        cols="35"
        rows="20"
        placeholder="Add a new note"
        value={noteText}
        onChange={handleLimit}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save-btn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
