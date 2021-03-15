//Action constants
const SET_AFFIRMATION = "notebook/set_affirmation";

//Action Creator
const setAffirmation = (payload) => ({
  type: SET_AFFIRMATION,
  payload,
});

//THUNKS
export const getNotebook = (id) => async (dispatch) => {
  const response = await fetch("/api/affirmations", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    let { data } = await response.json();

    dispatch(setAffirmation(data));
  }
};