//Action constantS
const CREATE_NOTEBOOK = "CREATE_NOTEBOOK"
const READ_NOTEBOOK = "READ_NOTEBOOK"
const UPDATE_NOTEBOOK = "UPDATE_NOTEBOOK"
const DELETE_NOTEBOOK = "DELETE_NOTEBOOK"

//Action Creator
const createNotebookAction = (title)=>({
    type:CREATE_NOTEBOOK,
    title
})
const readNotebookAction = (title)=>({
    type:READ_NOTEBOOK,
    title
})
const updateNotebookAction = (title)=>({
    type:UPDATE_NOTEBOOK,
    title
})
const DeleteNotebookAction = (title)=>({
    type:DELETE_NOTEBOOK,
    title
})

//THUNKS
export const createNotebook =(title)=>async(dispatch)=>{
    const res = await fetch("/api/notebooks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title
        })
    })
    const title = await res.json()
    dispatch(createNotebookAction(title))
    return title  
}

//NOTEBOOK INITIAL STATE 
const initialState = {
    title:[]
}
const reducer =(state = {notebook:initialState},{type,title}
    )=>{
        switch (type) {
          case CREATE_NOTEBOOK:
          return {title:{...state.title,...title}}
          default:
            return state;
        }
    }

export default reducer


