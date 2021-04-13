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

 

  const handleSubmit = async (e) => {
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
    <form onSubmit={handleSubmit}>
      <Center>My Notebooks</Center>
      <TopRight>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          
        />
        <Button type="submit">
          Add Notebook
        </Button>
      </TopRight>
      </form>
      
      {!!currentNotebooks &&
        currentNotebooks.map((notebook) => {
          return (
                <EditForm
                key={notebook.id}
                value={notebook.title}
                handleEdit={(title) =>
                  handleEdit(notebook.id, title)
                }
                handleDelete={() => handleDelete(notebook.id)}
                />
                 
          );
        })}
    </div>
  );
};

export default Notebook;
