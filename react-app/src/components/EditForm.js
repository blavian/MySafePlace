import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotebook} from "../redux-store/notebook";
import Button from "../styled/button"

const EditForm = (props) => {
  const [title, setTitle] = useState(props.title);

  const [edit, setEdit] = useState(false);

  const allowEdit = () => setEdit(!edit);

  const handleEdit = () => {
    props.handleEdit(title);
    allowEdit();
  };

  const handleCancel = () => {
    setTitle(props.title);
    allowEdit();
  };

  const handleDelete = () => {
    props.handleDelete();
  };

  const editable = edit ? (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleEdit();
      }}
    >
      <textarea
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
      />
      <div>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  ) : (
    <>
      <p>{title}</p>
      <Button onClick={allowEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
  return <span>{editable}</span>;
};

export default EditForm;
