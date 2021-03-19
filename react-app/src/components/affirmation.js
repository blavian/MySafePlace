import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations } from "../redux-store/affirmation";
import { useParams } from "react-router-dom";


 
  const Affirmation = ()=>{
    const { notebookId } = useParams();
    const dispatch = useDispatch();
    const currentAffirmation = useSelector((state) => {
      return Object.values(state.affirmation);
    });
    console.log(currentAffirmation)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
      dispatch(getAffirmations(notebookId));
    }, [dispatch,notebookId]);

    return (
      <div>
        <h1>My Affirmations</h1>
        {!!currentAffirmation && currentAffirmation.map((affirmation)=>{
          return(
            <>
            <l1>{affirmation.title}</l1>
            <l1>{affirmation.description}</l1>
            <l1>{affirmation.date}</l1>
            </>
          )
        }) }
      </div>
    )
  }


    

      
     



export default Affirmation;
