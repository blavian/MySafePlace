import React, {useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations,createAffirmations,deleteAffirmation, updateAffirmations } from "../redux-store/affirmation";
import { useParams } from "react-router-dom";
import Center from "../styled/center"
import Button from "../styled/button";
import EditAffirmationForm from "./EditAffirmation"




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


    const handleSubmit = async(e)=>{
      e.preventDefault();
      await dispatch(createAffirmations(description,notebookId))
      setDescription("")
    }

    const handleDelete = async (id) => {
      await dispatch(deleteAffirmation(id))
    };
    
    const handleEdit = async(id,description)=>{
      await dispatch(updateAffirmations(description,id))
    }
    const user = useSelector((state) => state.session.user);

    return (
      <div>
        <form onSubmit={handleSubmit} className="new-form">
          <Center> My Affirmations!</Center>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="Description"
          />
          <Button type="submit">Add Affirmation</Button>
        </form>
        {!!currentAffirmation &&
          currentAffirmation.map((affirmation) => {
            return (
              <ul>
                <EditAffirmationForm
                  key={affirmation.id}
                  value={affirmation.description}
                  handleEdit={(description) =>
                    handleEdit(affirmation.id, description)
                  }
                  handleDelete={() => handleDelete(affirmation.id)}
                />
              </ul>
            );
          })}
      </div>
    );
  }


    

      
     



export default Affirmation;
