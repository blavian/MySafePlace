import React, {useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations,createAffirmations } from "../redux-store/affirmation";
import { useParams } from "react-router-dom";
import Center from "../styled/center"
import Button from "../styled/button";

 
  const Affirmation = ()=>{
    const { notebookId } = useParams();
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");

    const currentAffirmation = useSelector((state) => {
      return Object.values(state.affirmation);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
      dispatch(getAffirmations(notebookId));
    }, [dispatch,notebookId]);

    const addAffirmation = async(e)=>{
      e.preventDefault();
      await dispatch(createAffirmations(description))
      setDescription("")
    }

    return (
      <div>
        <Center>My Affirmations</Center>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="Description"
        />
        <Button onClick={(e) => addAffirmation(e)} type="button">
          Add Affirmation
        </Button>
        {!!currentAffirmation &&
          currentAffirmation.map((affirmation) => {
            return (
              <>
                <ol>
                  <li>{affirmation.description}</li>
                </ol>
              </>
            );
          })}
      </div>
    );
  }


    

      
     



export default Affirmation;
