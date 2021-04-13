import React, { useState } from "react";
import Button from "../styled/button"
import * as Card from "../styled/card"; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EditForm = props => {
  const [title, setTitle] = useState(props.value);
 const currentNotebooks = useSelector((state) => Object.values(state.notebook));
  const [edit, setEdit] = useState(false);

  const allowEdit = () => setEdit(!edit);

  const handleEdit = () => {
    props.handleEdit(title);
    allowEdit();
  };

  const handleCancel = () => {
    allowEdit();
  };

  const handleDelete = () => {
    props.handleDelete();
  };

  const editable = edit ? (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleEdit();
      }}
    >
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
                    <textarea
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      type="text"
                    />
                  </Card.CardTitle>
                    <Button
                      onClick={handleCancel}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </Card.CardContent>
              </Card.Cards>
            </Card.CardItems>
          </Card.Cards>
        </Card.Main>
      </div>
    </form>
  ) : (
      (
    <>
    
    
    
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
                        <Button onClick={allowEdit}>Edit</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                      </Card.CardContent>
                    </Card.Cards>
                  </Card.CardItems>
                </Card.Cards>
              </Card.Main>
            </div>
          );
        })}
    </>
  )
    
  );
  return <span>{editable}</span>;
};

export default EditForm;
