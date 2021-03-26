import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAffirmations} from "../redux-store/affirmation"
import Button from "../styled/button";

const EditAffirmationForm =  props => {
  
  const [description, setDescription] = useState(props.value);

  const [edit, setEdit] = useState(false);


  const allowEdit = () => setEdit(!edit);
  
  const handleEdit = ()=>{
    props.handleEdit(description)
   allowEdit();
  }

   const handleCancel = () => {
     setDescription(props.description)
     allowEdit();
   };

   const handleDelete = () => {
    props.handleDelete();
  }
  
  
 const children = edit ? (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleEdit();
      }}
    >
      <textarea
        value={description}
        onChange={event => setDescription(event.target.value)}
        type="text"
      />
      <div>
        <button onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">
          Save
        </button>
      </div>
    </form>
  ) : (
    <>
      <p>{description}</p>
        <button onClick={allowEdit}>
          Edit
        </button>
        <button
          onClick={handleDelete}
        >
           Delete
        </button>
    </>
  );return <span>{children}</span>;
  
};


export default EditAffirmationForm;
