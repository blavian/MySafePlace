import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotebook,
  createNotebook,
  updateNotebook,
} from "../redux-store/notebook";
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
import Modal from "react-modal";
import EditForm from "./EditForm";
const Notebook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const [display, setDisplay] = useState(false);
  const currentNotebooks = useSelector((state) =>
    Object.values(state.notebook)
  );

  const [currentNotebook, setCurrentNotebook] = useState({ id: "", title: "" });

  useEffect(async () => {
    dispatch(getNotebook());
  }, [dispatch]);

  const addNotebook = async (e) => {
    e.preventDefault();
    await dispatch(createNotebook(title));
    setTitle("");
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
      <Modal isOpen={display}>
        <EditForm currentNotebook={currentNotebook} />
        <Button onClick={() => setDisplay(false)}>Close</Button>
      </Modal>
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
                        <CardTitle>{notebook.title}</CardTitle>
                        <CardButton
                          onClick={(e) => {
                            setCurrentNotebook({
                              id: notebook.id,
                              title: notebook.title,
                            });
                            setDisplay(true);
                          }}
                        >
                          edit title
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
