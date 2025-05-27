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
import { Link } from "react-router-dom";

const Notebook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  
  
  const currentNotebooks = useSelector((state) =>
    Object.values(state.notebook)
  );

  const [currentNotebook, setCurrentNotebook] = useState({ id: "", title: "" });
  const [newTitle, setNewTitle] = useState(currentNotebook.title);
  const [editable, setEditable] = useState(false)
  const [editableNotebooks, setEditableNotebooks] = useState({});

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

  const handleKeyDown = async (e, currentNotebook, isEditable) => {
    if (e.key === "Enter") {
      if (isEditable) {
        updateNotebooks(e);
        setEditableNotebooks((prevEditableNotebooks) => ({
          ...prevEditableNotebooks,
          [currentNotebook.id]: false,
        }));
      } else {
        addNotebook(e);
        setTitle("");
      }
    }
  };
const updateNotebooks = (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    dispatch(updateNotebook(newTitle, currentNotebook.id));
    setEditable(false)
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

{currentNotebooks &&
  currentNotebooks.map((notebook) => {
    const isEditable = editableNotebooks[notebook.id] || false;

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
                    {isEditable ? (
                      <div>
                        <input
                          type="text"
                          placeholder={notebook.title}
                          name="title"
                          onChange={(e) => setNewTitle(e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, currentNotebook, isEditable)}
                        />
                        <Card.CardButton
                          onClick={(e) => {
                            setEditableNotebooks((prevEditableNotebooks) => ({
                              ...prevEditableNotebooks,
                              [notebook.id]: false,
                            }));
                          }}
                        >
                          Cancel
                        </Card.CardButton>
                      </div>
                    ) : (
                      <Link to={`/notebooks/${notebook.id}`}>
                        {notebook.title}
                      </Link>
                    )}
                  </Card.CardTitle>
                  {isEditable ? null : (
                    <Card.CardButton
                      onClick={(e) => {
                        setCurrentNotebook({
                          id: notebook.id,
                          title: notebook.title,
                        });
                        setEditableNotebooks((prevEditableNotebooks) => ({
                          ...prevEditableNotebooks,
                          [notebook.id]: true,
                        }));
                      }}
                    >
                      edit title
                    </Card.CardButton>
                  )}
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
