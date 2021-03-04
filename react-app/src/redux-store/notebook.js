//Action constantS
const CREATE_NOTEBOOK = "CREATE_NOTEBOOK"
const READ_NOTEBOOK = "READ_NOTEBOOK"
const UPDATE_NOTEBOOK = "UPDATE_NOTEBOOK"
const DELETE_NOTEBOOK = "DELETE_NOTEBOOK"

//Action Creator
const createNotebookAction = (payload)=>({
    type:CREATE_NOTEBOOK,
    payload
})
const readNotebookAction = (payload)=>({
    type:READ_NOTEBOOK,
    payload
})
const updateNotebookAction = (payload)=>({
    type:UPDATE_NOTEBOOK,
    payload
})
const DeleteNotebookAction = (payload)=>({
    type:DELETE_NOTEBOOK,
    payload
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
    const {data} = res.data
    dispatch(createNotebookAction(data))
    return data  
}

//NOTEBOOK INITIAL STATE 
const initialState = {
    title:[]
}
const reducer =(state = {notebook:initialState},{type,payload}
    )=>{
        let stateCopy
        switch (type) {
          case CREATE_NOTEBOOK:
            stateCopy = { title: { ...state.title } };
            return stateCopy;
          default:
            return state;
        }
    }

export default reducer


