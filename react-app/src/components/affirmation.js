import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAffirmations 
} from "../redux-store/affirmation"


const Affirmation = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const[description,setDescription] = useState('')
  const[date,setDate] = useState('')
  
  const currentAffirmations = useSelector((state) =>state.affirmation);
console.log(currentAffirmations);
 

  useEffect(async () => {
    dispatch(getAffirmations());
  }, [dispatch]);


  return (
    <div>
      {currentAffirmations &&
        currentAffirmations.map((affirmation) => {
          return (
            <div key={affirmation.id}>
             <p>{affirmation.title}</p>

            </div>
          );
        })}
    </div>
  );
};

export default Affirmation;
