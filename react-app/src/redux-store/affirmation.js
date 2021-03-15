//Action constants
const SET_AFFIRMATION = "notebook/set_affirmation";

//Action Creator
const setAffirmation = (payload) => ({
  type: SET_AFFIRMATION,
  payload,
});