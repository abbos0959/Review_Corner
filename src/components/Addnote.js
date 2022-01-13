import React, { useState } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Addnote = ({ HandleAddNote }) => {
  const [noteText, setnoteText] = useState("");
  const characterLimits = 100;
  const HandleChange = (event) => {
    if (characterLimits - event.target.value.length >= 0) {
      setnoteText(event.target.value);
    }
  };

  const HandleSaveClick=()=>{
      if(noteText.trim().length>0){
          HandleAddNote(noteText)
          setnoteText("")
      }
  }
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={noteText}
        onChange={HandleChange}
        placeholder="Type Review here..."
      ></textarea>
      <div className="note-footer">
        <small> {characterLimits-noteText.length}</small>
        <Button onClick={HandleSaveClick} className="save">
          
          Publish <ArrowUpwardIcon />
        </Button>
      </div>
    </div>
  );
};
