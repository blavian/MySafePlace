import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotebook } from "../redux-store/notebook";
import Modal from "react-modal";

import { Redirect } from "react-router-dom";

const EditForm = ({ currentNotebook }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentNotebook.title);
  
  const [display, setDisplay] = useState(false);


  const updateNotebooks = (e) => {
    e.preventDefault();
    dispatch(updateNotebook(title, currentNotebook.id));
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
        <button onClick={() => setDisplay(false)}
          type="submit">Edit new Notebook
        </button>
      </form>
    </div>
  );
};

export default EditForm;