import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotebook} from "./notebookSlice";
import Button from "../../styled/button"

const EditForm = ({ currentNotebook }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentNotebook.title);


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
        <Button 
          type="submit">Edit new Notebook
        </Button> 
      </form>
    </div>
  );
};

export default EditForm;
