import React, {useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAffirmations,createAffirmations,deleteAffirmation } from "../redux-store/affirmation";
import { useParams } from "react-router-dom";
import Center from "../styled/center"
import Button from "../styled/button";
import EditAffirmationForm from "./EditAffirmation"
 import Modal from "styled-react-modal";
const StyledModal = Modal.styled`
  width: 50rem;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      await dispatch(createAffirmations(description,notebookId))
      setDescription("")
    }

    const deleted = async (e, affirmationId) => {
      await dispatch(deleteAffirmation(affirmationId));
    };
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal(e) {
      setIsOpen(!isOpen);
    }

    const [currentAffirmations, setCurrentAffirmations] = useState({
      id: "",
      description: "",
    });


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

        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <EditAffirmationForm currentAffirmations={currentAffirmations} />
          <Button onClick={toggleModal}>Close</Button>
        </StyledModal>
      
        {!!currentAffirmation &&
          currentAffirmation.map((affirmation) => {
            return (
              <>
              <ul>
              <li key={affirmation.id}>
                  {affirmation.description}</li>
                </ul>
                <Button
                  onClick={(e) => {
                    deleted(e, affirmation.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={(e) => {
                    setCurrentAffirmations({
                      id: affirmation.id,
                      description: affirmation.description,
                    });
                    setIsOpen(true);
                  }}
                >
                  Edit
                </Button>
              </>
            );
          })}
      </div>
    );
  }


    

      
     



export default Affirmation;
