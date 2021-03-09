import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotebook } from "../redux-store/notebook";

const EditForm = ({ currentNotebook }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentNotebook.title);

  const updateNotebooks = (e) => {
    e.preventDefault();
    dispatch(updateNotebook(title, currentNotebook.id));
    console.log("hello from the edit form");
  };
  return (
    <div>
      <p>{currentNotebook.title}</p>
      <p>{currentNotebook.id}</p>
      <form onSubmit={updateNotebooks}>
        <input
          type="text"
          value={title}
          placeholder={currentNotebook.title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <button type="submit">Edit new Notebook</button>
      </form>
    </div>
  );
};

export default EditForm;
