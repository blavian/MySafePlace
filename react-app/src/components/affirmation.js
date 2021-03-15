import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAffirmations 
} from "../redux-store/affirmation"

import * as Card from "../styled/card";

const Affirmations = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const[description,setDescription] = useState('')
  const[date,setDate] = useState('')
  
  const currentAffirmations = useSelector((state) =>
    Object.values(state.affirmation)
  );

 

  useEffect(async () => {
    dispatch(getAffirmations());
  }, [dispatch]);


  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
        />
      {currentAffirmations &&
        currentAffirmations.map((a) => {
          return (
            <div key={affirmation.id}>
             <p>{a.title}</p>
             
            </div>
          );
        })}
    </div>
  );
};

export default Notebook;
