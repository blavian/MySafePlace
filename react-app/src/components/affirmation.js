import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations } from "../redux-store/affirmation";


const Affirmation = () => {
  const dispatch = useDispatch();
 
  const [title, setTitle] = useState("");
  const[description,setDescription] = useState('')
  const[date,setDate] = useState('')
  const affirmations = useSelector((state) =>
   (state.affirmation)
  )
  console.log(affirmations)
 useEffect(async (notebookId) => {
   dispatch(getAffirmations(notebookId));
 }, [dispatch]);
  return (
  <div>
   <h1> {affirmations.title}</h1>
    </div>
   );
};
    

      
     



export default Affirmation;
