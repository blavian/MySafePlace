import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNotebook, createNotebook,updateNotebook} from "../redux-store/notebook";
import TopRight from "../styled/top-right";
import Button from "../styled/button";
import Center from "../styled/center";
import {
  Main,
  Cards,
  CardItems,
  Card,
  CardContent,
  Image,
  CardTitle,
  CardButton,
} from "../styled/card";

const Notebook = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const currentNotebooks = useSelector((state) =>
    Object.values(state.notebook)
  );

  useEffect(async () => {
    dispatch(getNotebook());
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createNotebook(title));
    setTitle("");
  };
  const updateNotebookSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.id, id)
    await dispatch(updateNotebook(title, id));
  };

  return (
    <div>
      <Center>My Notebooks</Center>
      <TopRight>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <Button type="submit">Add a new Notebook</Button>
        </form>

        <form onSubmit={updateNotebookSubmit}>
          <input
            type="text"
            id = {id}
            placeholder = {title}
            // onChange={(e) => updateNotebook(e.target.value)}
            name="title"
          />
          <Button type="submit">Edit new Notebook</Button>
       </form>
      </TopRight>
      {currentNotebooks &&
        currentNotebooks.map((notebook) => {
          return (
            <>
              <Main>
                <Cards>
                  <CardItems>
                    <Card>
                      <Image>
                        <img src="https://cdn.pixabay.com/photo/2016/08/03/09/00/self-esteem-1566153_960_720.jpg" />
                      </Image>
                      <CardContent>
                        <CardTitle>
                            {notebook.title}
                        </CardTitle>
                        <CardButton ondblClick={(e) => {
                          console.log(notebook.id)
                          setId(notebook.id)}
                        
                        }>
                          edit notebook
                        </CardButton>
                      </CardContent>
                    </Card>
                  </CardItems>
                </Cards>
              </Main>
            </>
          );
        })}
    </div>
  );
};

export default Notebook;
