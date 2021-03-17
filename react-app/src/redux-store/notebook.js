//Action constants
const CREATE_NOTEBOOK = "notebook/create_notebook";
const SET_NOTEBOOK = "notebook/set_notebook";
const UPDATE_NOTEBOOK = "notebook/update_notebook";
const REMOVE_NOTEBOOK = "notebook/remove_notebook";
const GET_AFFIRMATIONS = "notebook/get_affirmations"

//Action Creator
const setNotebook = (payload) => ({
  type: SET_NOTEBOOK,
  payload,
});



const updateNotebookActionCreator = (payload) => ({
  type: UPDATE_NOTEBOOK,
  payload,
});
const RemoveNotebookActionCreator = (payload) => ({
  type: REMOVE_NOTEBOOK,
  payload,
});

const createNotebookActionCreator = (payload) => ({
  type: CREATE_NOTEBOOK,
  payload,
});

const setAffirmationCreator = (payload) => ({
  type: GET_AFFIRMATIONS,
  payload,
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
  if (response.ok) {
    dispatch(RemoveNotebookActionCreator(id));
  }
};

export const user_Affirmations = (id) => async (dispatch)=>{
  console.log("hello from the thunk", id)
  const res = await fetch(`/api/notebooks/${id}/affirmations`, {
    headers: {
      "Content-type": "application/json",
    },
  });
   if (!res.ok) throw res;
   const { data } = await res.json();
   dispatch(setAffirmationCreator(data));
   return data;
}
//NOTEBOOK INITIAL STATE
const initialState = {};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_NOTEBOOK:
      newState = {};
      action.payload.forEach((item) => {
        newState[item.id] = {
          id: item.id,
          title: item.title,
        };
      });
      return newState;
    case CREATE_NOTEBOOK:
      newState = {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
        },
      };
      return newState;
    case UPDATE_NOTEBOOK:
      newState = {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
        },
      };
      return newState;
    case REMOVE_NOTEBOOK:
      newState = {
        ...state,
      };
      delete newState[action.payload];
      return newState;
    case GET_AFFIRMATIONS:
         newState = {
           ...state,
           [action.payload.id]: {
             id: action.payload.id,
             title: action.payload.title,
           },
         }; 

    default:
      return state;
  }
};

export default reducer;
