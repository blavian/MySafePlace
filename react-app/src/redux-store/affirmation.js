//Action constants
const SET_AFFIRMATION = "affirmation/set_affirmation";
const CREATE_AFFIRMATION = "affirmation/create_affirmation"
const REMOVE_AFFIRMATION = "affirmation/remove_notebook";

//Action Creator
const setAffirmation = (payload) => ({
  type: SET_AFFIRMATION,
  payload,
});

const createAffirmationCreator = (payload) => ({
  type: CREATE_AFFIRMATION,
  payload
});
const RemoveAffirmationActionCreator = (payload) => ({
  type: REMOVE_Affirmation,
  payload,
});


//THUNKS
export const getAffirmations = (notebookId) => async (dispatch) => {
  const response = await fetch(`/api/notebooks/${notebookId}`);
  if (response.ok) {
    let { data } = await response.json();
    dispatch(setAffirmation(data));
  }
};

export const createAffirmations = (description,notebook_id) => async (dispatch) => {
  const response = await fetch("/api/affirmations", {
    method: "POST",
    body: JSON.stringify({
      description,
      notebook_id
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.ok) {
    let { data } = await response.json();
    dispatch(createAffirmationCreator(data));
  }
};

export const deleteAffirmation = (id) => async (dispatch) => {
  const response = await fetch(`/api/affirmations/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(RemoveAffirmationActionCreator(id));
  }
};

//Reducers
const initialState = {};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_AFFIRMATION:
      newState = {};
      action.payload.forEach((item) => {
        newState[item.id] = {
          id: item.id,
          description: item.description,
        };
      });
      return newState;
    case CREATE_AFFIRMATION:
      newState = {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          description: action.payload.description
        },
      };
      return newState;

    default:
      return state;
  }
}; 


export default reducer
