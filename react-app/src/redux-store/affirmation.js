//Action constants
const SET_AFFIRMATION = "notebook/set_affirmation";
const CREATE_AFFIRMATION = "affirmation/create_affirmation"

//Action Creator
const setAffirmation = (payload) => ({
  type: SET_AFFIRMATION,
  payload,
});

const createAffirmationCreator = (payload) => ({
  type: CREATE_AFFIRMATION,
  payload
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
