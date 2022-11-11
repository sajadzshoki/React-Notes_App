import React from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = React.useState("");
  const characterLimit = 200;

  const handleLimit = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        placeholder="Add a new note"
        value={noteText}
        onChange={handleLimit}
      ></textarea>
      <div className="note-footer save-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save-btn btn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
export default AddNote;