//Action constantS
const CREATE_NOTEBOOK = "CREATE_NOTEBOOK"
const SET_NOTEBOOK =    "SET_NOTEBOOK"
const UPDATE_NOTEBOOK = "UPDATE_NOTEBOOK"
const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK"

//Action Creator
const setNotebook = (title)=>({
    type:SET_NOTEBOOK,
    title,
// })
// const readNotebookAction = (title)=>({
//     type:READ_NOTEBOOK,
//     title
// })
// const updateNotebookAction = (title)=>({
//     type:UPDATE_NOTEBOOK,
//     title
// })
// const DeleteNotebookAction = (title)=>({
//     type:DELETE_NOTEBOOK,
//     title
 })

//THUNKS
// export const createNotebook =(title)=>async(dispatch)=>{
//     const res = await fetch("/api/notebooks", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             title
//         })
//     })
//     const title = await res.json()
//     dispatch(createNotebookAction(title))
//     return title  
// }

export const getNotebook = () =>async(dispatch)=>{
    const response = await fetch("/api/notebooks",{
        headers:{
            "Content-Type": "application/json",
        },
    })
    if (response.ok){
        let res = await response.json()
        dispatch(
            setNotebook(res))
    }
}

//NOTEBOOK INITIAL STATE 
const initialState = []
const reducer =(state = initialState,action) => {
        let newState;
        switch (action.type) {
          case SET_NOTEBOOK:
          newState = action.title
          return newState
          default:
            return state;
        }
    }

export default reducer


