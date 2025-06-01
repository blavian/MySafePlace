import React, {useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations,createAffirmations,deleteAffirmation, updateAffirmations } from "../redux-store/affirmation";
import { useParams } from "react-router-dom";
import Center from "../styled/center"
import Button from "../styled/button";
import EditAffirmationForm from "./EditAffirmation"
import styled from "styled-components"

const Textarea = styled.textarea`
margin-left:90px;
`
const Ul = styled.ul`
margin-left:50px;
`


  const Affirmation = ()=>{
    const { notebookId } = useParams();
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");

    const currentAffirmation = useSelector((state) => {
      return Object.values(state.affirmation);
    });

    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      const fetchAffirmations = async () => {
        await dispatch(getAffirmations(notebookId));
      };
      fetchAffirmations();
    }, [dispatch, notebookId]);


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
   
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Center> My Affirmations!</Center>
          <Textarea
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
              <Ul>
                <EditAffirmationForm
                  key={affirmation.id}
                  value={affirmation.description}
                  handleEdit={(description) =>
                    handleEdit(affirmation.id, description)
                  }
                  handleDelete={() => handleDelete(affirmation.id)}
                />
              </Ul>
            );
          })}
      </div>
    );
  }


    

      
     



export default Affirmation;
