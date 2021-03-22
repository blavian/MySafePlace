import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAffirmations} from "../redux-store/affirmation"
import Button from "../styled/button";

const EditAffirmationForm = ({ currentAffirmation }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(currentAffirmation.title);

  const updateAffirmation = (e) => {
    e.preventDefault();
    dispatch(updateAffirmations(description, currentAffirmation.id));
  };

  return (
    <div>
      <form onSubmit={updateAffirmation}>
        <input
          type="text"
          placeholder={currentAffirmation.description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
        />
        <Button type="submit">Edit</Button>
      </form>
    </div>
  );
};

export default EditAffirmationForm;
