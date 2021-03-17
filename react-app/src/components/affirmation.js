import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_Affirmations } from "../redux-store/notebook";


const Affirmation = () => {
  const dispatch = useDispatch();
 
  const [title, setTitle] = useState("");
  const[description,setDescription] = useState('')
  const[date,setDate] = useState('')
  const affirmations = useSelector((state) =>
  Object.values(state.notebook)
  )
  console.log(affirmations)
 useEffect(async () => {
   dispatch(user_Affirmations());
 }, [dispatch]);
  return (
    <div>
      
      {affirmations &&
        affirmations.map((affirmation) => {
          return (
            <div key={affirmation.id}>
              <li>
                {affirmation.title}
              </li>
            </div>
          );
        })}
    </div>
  );
};



export default Affirmation;
