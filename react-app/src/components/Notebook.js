import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotebook,
  createNotebook,
  deleteNotebook,
  updateNotebook
} from "../redux-store/notebook";
import { useParams } from "react-router-dom";


import TopRight from "../styled/top-right";
import Button from "../styled/button";
import Center from "../styled/center";
import * as Card from "../styled/card" 

import EditForm from "./EditForm";
import {Link } from 'react-router-dom';


const Notebook = () => {
  const dispatch = useDispatch();
 const { id} = useParams();
  const [title, setTitle] = useState("");

  const currentNotebooks = useSelector((state) =>
    Object.values(state.notebook)
    
  );


  useEffect(async () => {
    dispatch(getNotebook(id));
  }, [dispatch,id]);

 

  const addNotebook = async (e) => {
    e.preventDefault();
    await dispatch(createNotebook(title,id));
    setTitle("");
  };

 const handleDelete = async (id) => {
   await dispatch(deleteNotebook(id));
 };

 const handleEdit = async (id, title) => {
   await dispatch(updateNotebook(title, id));
 };

  return (
    <div>
      <Center>My Notebooks</Center>
      <TopRight>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          
        />
        <Button onClick={(e) => addNotebook(e)} type="button">
          Add Notebook
        </Button>
      </TopRight>
      
      {!!currentNotebooks &&
        currentNotebooks.map((notebook) => {
          return (
            <div>
              
              <Card.Main>
                <Card.Cards>
                  <Card.CardItems>
                    <Card.Cards>
                      <Card.Image>
                        <img src="https://cdn.pixabay.com/photo/2016/08/03/09/00/self-esteem-1566153_960_720.jpg" />
                      </Card.Image>
                      <Card.CardContent>
                        <Card.CardTitle>
                          <Link to={`/notebooks/${notebook.id}`}>
                            {notebook.title}
                          </Link>
                        </Card.CardTitle>
                        <EditForm
                key={notebook.id}
                value={notebook.title}
                handleEdit={(title) =>
                  handleEdit(notebook.id, title)
                }
                handleDelete={() => handleDelete(notebook.id)}
                />
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
