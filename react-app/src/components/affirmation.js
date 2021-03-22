import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations } from "../redux-store/affirmation";
import { useParams } from "react-router-dom";
import Center from "../styled/center"


 
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
        <Center>My Affirmations</Center>
        {!!currentAffirmation && currentAffirmation.map((affirmation)=>{
          return(
            <>
            <ol>
            <l1>{affirmation.description}</l1>
            </ol>
            </>
          )
        }) }
      </div>
    )
  }


    

      
     



export default Affirmation;
