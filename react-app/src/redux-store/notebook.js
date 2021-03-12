//Action constants
const CREATE_NOTEBOOK = "notebook/create_notebook";
const SET_NOTEBOOK = "notebook/set_notebook";
const UPDATE_NOTEBOOK = "notebook/update_notebook";
const REMOVE_NOTEBOOK = "notebook/remove_notebook";
const CURRENT_NOTEBOOK = "notebook/remove_notebook";

//Action Creator
const setNotebook = (title) => ({
  type: SET_NOTEBOOK,
  title,
});

const currentNotebook = (id) => ({
  type: CURRENT_NOTEBOOK,
  id,
});

const updateNotebookActionCreator = (title) => ({
  type: UPDATE_NOTEBOOK,
  title,
});
const RemoveNotebookActionCreator = (id) => ({
  type: REMOVE_NOTEBOOK,
  id,
});

const createNotebookActionCreator = (title) => ({
  type: CREATE_NOTEBOOK,
  title,
});

//THUNKS
export const getNotebook = () => async (dispatch) => {
  const response = await fetch("/api/notebooks", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    let { data } = await response.json();

    dispatch(setNotebook(data));
  }
};

export const getOneNotebook = (id) => async (dispatch) => {
  const response = await fetch(`/api/notebooks/{id}`);
  if (response.ok) {
    let { data } = await response.json();

    dispatch(currentNotebook(data));
  }
};
export const createNotebook = (title) => async (dispatch) => {
  const response = await fetch("/api/notebooks", {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) throw response;
  const { data } = await response.json();

  dispatch(createNotebookActionCreator(data));
};

export const updateNotebook = (title, id) => async (dispatch) => {
  console.log("hello from the thunk", title, id);
  const response = await fetch(`/api/notebooks/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) throw response;
  const { data } = await response.json();

  dispatch(updateNotebookActionCreator(data));
  return data;
};

export const deleteNotebook = (id) => async (dispatch) => {
  const response = await fetch(`/api/notebooks/${id}`, {
    method: "DELETE",
  });
  dispatch(RemoveNotebookActionCreator(id));
};
//NOTEBOOK INITIAL STATE
const initialState = { currentNotebook: {} };

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_NOTEBOOK:
      newState = {};
      action.title.forEach((item) => {
        newState[item.id] = {
          id: item.id,
          title: item.title,
        };
      });
      return newState;
    case CREATE_NOTEBOOK:
      newState = {
        ...state,
        [action.title.id]: {
          id: action.title.id,
          title: action.title.title,
        },
      };
      return newState;
    case UPDATE_NOTEBOOK:
      newState = {
        ...state,
        [action.title.id]: {
          id: action.title.id,
          title: action.title.title,
        },
      };
      return newState;
    case REMOVE_NOTEBOOK:
      delete newState[action.title.id];
    case CURRENT_NOTEBOOK:
      newState = Object.assign({}, state);
      newState.currentNotebook = action.id;
      return newState;

    default:
      return state;
  }
};

export default reducer;
