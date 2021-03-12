import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotebook,deleteNotebook } from "../redux-store/notebook";
import Button from "../styled/button"

const EditForm = ({ currentNotebook }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentNotebook.title);
  
  const [display, setDisplay] = useState(false);


  const updateNotebooks = (e) => {
    e.preventDefault();
    dispatch(updateNotebook(title, currentNotebook.id));
  };

   const deleted = async (e) => {
     e.preventDefault();
     await dispatch(deleteNotebook(currentNotebook.id));
   };
  return (
    <div>
      <form onSubmit={updateNotebooks}>
        <input
          type="text"
          placeholder={currentNotebook.title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <button 
          type="submit">Edit new Notebook
        </button>
        <Button onclick = {deleted} DELETE NOTEBOOK></Button> 
      </form>
    </div>
  );
};

export default EditForm;
