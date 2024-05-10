import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotebook,
  createNotebook,
  deleteNotebook,
  updateNotebook
} from "../redux-store/notebook";

import TopRight from "../styled/top-right";
import Button from "../styled/button";
import Center from "../styled/center";
import * as Card from "../styled/card";

import Modal from "styled-react-modal";
import EditForm from "./EditForm";
import { Link } from "react-router-dom";

const Notebook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const StyledModal = Modal.styled`
  width: 50rem;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  const currentNotebooks = useSelector((state) =>
    Object.values(state.notebook)
  );

  const [currentNotebook, setCurrentNotebook] = useState({ id: "", title: "" });
  const [editable, setEditable] = useState(false)

  useEffect( () => { 
    dispatch(getNotebook());
  }, [dispatch]);

  const addNotebook = async (e) => {
    e.preventDefault();
    await dispatch(createNotebook(title));
    setTitle("");
  };

  const deleted = async (e, notebookId) => {
    await dispatch(deleteNotebook(notebookId));
  };

const handleKeyDown = async (e)=>{
  if(e.key==='Enter'){
    addNotebook(e)
    setTitle("")
  }
}
const updateNotebooks = (e) => {
  if (e.key === 'Enter'){
    e.preventDefault();
    dispatch(updateNotebook(title, currentNotebook.id));
  }
 
};

  return (
    <div>
      <Center>My Notebooks</Center>
      <TopRight>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          name="title"
        />
        <Button onClick={(e) => addNotebook(e)} type="button">
          Add Notebook
        </Button>
      </TopRight>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <EditForm currentNotebook={currentNotebook} />
        <Button onClick={toggleModal}>Close</Button>
      </StyledModal>
      {currentNotebooks &&
        currentNotebooks.map((notebook) => {
          return (
            <div key={notebook.id}>
              <Card.Main>
                <Card.Cards>
                  <Card.CardItems>
                    <Card.Cards>
                      <Card.Image>
                        <img src="https://cdn.pixabay.com/photo/2016/08/03/09/00/self-esteem-1566153_960_720.jpg" alt="" />
                      </Card.Image>
                      <Card.CardContent>
                        <Card.CardTitle>
                          {editable ? (
                            <div>
                               <input
          type="text"
          placeholder={currentNotebook.title}
          name="notebook"
        />
                            </div>
                            
                          ):(
                            <Link to={`/notebooks/${notebook.id}`}>
                                 {notebook.title}
                               </Link>
                          )}
                        </Card.CardTitle>
                        <Card.CardButton
                          onClick={(e) => {
                            setCurrentNotebook({
                              id: notebook.id,
                              title: notebook.title,
                            });
                            setIsOpen(true)
                            setEditable(false)
                            ;
                          }}
                        >
                          edit title
                        </Card.CardButton>
                        <Card.CardButton
                          onClick={(e) => {
                            deleted(e, notebook.id);
                          }}
                        >
                          Delete
                        </Card.CardButton>
                      </Card.CardContent>
                    </Card.Cards>
                  </Card.CardItems>
                </Card.Cards>
              </Card.Main>
            </div>
          );
        })}
    </div>
  );
};

export default Notebook;
