import React, { useState } from "react";
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
     allowEdit();
   };

   const handleDelete = () => {
    props.handleDelete();
  }
  
  
 const editable = edit ? (
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
        <Button onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save
        </Button>
      </div>
    </form>
  ) : (
    <>
      <p>{description}</p>
        <Button onClick={allowEdit}>
          Edit
        </Button>
        <Button
          onClick={handleDelete}
        >
           Delete
        </Button>
    </>
  );return <span>{editable}</span>;
  
};


export default EditAffirmationForm;
