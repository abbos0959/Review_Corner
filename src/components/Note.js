import React from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className="note">
      <span> {text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <Button onClick={()=>handleDeleteNote(id)} >
          <DeleteOutlineIcon style={{ color: "red" }} />
        </Button>
      </div>
    </div>
  );
};
