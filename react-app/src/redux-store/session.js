// So we do not make a type we set this to a variable 
const SET_SESSION_USER = 'SET_SESSION_USER'
const REMOVE_SESSION_USER = 'REMOVE_SESSION_USER'

//Action Creators that return objects

const setSessionUser = (user)=>({
    type:SET_SESSION_USER,
    user
})

const removeSessionUser = ()=>({
    type:REMOVE_SESSION_USER
})

//Thunks(actions that return functions)
export const authenticate = () => async (dispatch) => {
  const res = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data =  await res.json();
  if (!data.errors) dispatch(setSessionUser(user));
  return data
};


export const login = (email, password) => 
async(dispatch)=>{
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    })
    })
    const data = await res.json()
    if(!data.errors) dispatch(setSessionUser(user))
  return data
};

export const logout = () =>async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(removeSessionUser()) 
  return response
};
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
    dispatch(setSessionUser(response.data.user));
  return response;
};

// Reducer configuration

const userTemplate = {
  id: null,
  username: null,
  email: null,
};
const reducer = (state={user: userTemplate}, {type, payload}) => {
  switch(type) {
    case SET_SESSION_USER:
      return {user: {...state.user, ...payload}};

    case REMOVE_SESSION_USER:
      return {user: {...state.user, ...payload}};
    default:
      return state; }
};

