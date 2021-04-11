import React, { useState } from "react";
import Button from "../styled/button"
import * as Card from "../styled/card"; 

const EditForm = props => {
  const [title, setTitle] = useState(props.value);

  const [edit, setEdit] = useState(false);

  const allowEdit = () => setEdit(!edit);

  const handleEdit = () => {
    props.handleEdit(title);
    allowEdit();
  };

  const handleCancel = () => {
    setTitle(props.title);
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
                </Card.CardContent>
              </Card.Cards>
            </Card.CardItems>
          </Card.Cards>
        </Card.Main>
      </div>

      <div>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  ) : (
    <>
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
                    <p>{title}</p>
                  </Card.CardTitle>
                </Card.CardContent>
              </Card.Cards>
            </Card.CardItems>
          </Card.Cards>
        </Card.Main>
      </div>
      <Button onClick={allowEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
  return <span>{editable}</span>;
};

export default EditForm;
