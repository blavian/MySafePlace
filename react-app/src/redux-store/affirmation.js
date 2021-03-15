//Action constants
const SET_AFFIRMATION = "notebook/set_affirmation";

//Action Creator
const setAffirmation = (payload) => ({
  type: SET_AFFIRMATION,
  payload,
});

//THUNKS
export const getAffirmations = (id) => async (dispatch) => {
  const response = await fetch(`/api/affirmations/${id}`);
  if (response.ok) {
    let { data } = await response.json();
    console.log(data)
    dispatch(setAffirmation(data));
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
          title: item.title,
          description: item.description,
          date: item.date,
        };
      });
      console.log(newState)
      return newState;
    default:
      return state;
  }
}; 


export default reducer
