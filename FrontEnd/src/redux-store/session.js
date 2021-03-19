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

//Thunks(action creator  that return functions)
export const authenticate = () => async (dispatch) => {
  const res = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const user =  await res.json();
  if (!user.errors) dispatch(setSessionUser(user));
  return user
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
    const user = await res.json()
    if(!user.errors) dispatch(setSessionUser(user))
  return user
};

export const demoLogin = () => async (dispatch) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email:"demo@aa.io",
      password: "password"
    }),
  });
  const user = await res.json();
  if (!user.errors) dispatch(setSessionUser(user));
  return user;
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
export const signUp =(username, email, password) => async(dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
 const user = await response.json();
 if (!user.errors) dispatch(setSessionUser(user));
 return user;
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
export default reducer

