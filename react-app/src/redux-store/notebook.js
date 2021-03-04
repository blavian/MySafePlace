//Action constantS
const CREATE_NOTEBOOK = "CREATE_NOTEBOOK"
const READ_NOTEBOOK = "READ_NOTEBOOK"
const UPDATE_NOTEBOOK = "UPDATE_NOTEBOOK"
const DELETE_NOTEBOOK = "DELETE_NOTEBOOK"

//NOTEBOOK INITIAL STATE 
const initialState = {
    title:[]
}
//Action Creator
const createNotebook = (payload)=>({
type:CREATE_NOTEBOOK,
payload
})
const readNotebook = (payload)=>({
type:READ_NOTEBOOK,
payload
})
const updateNotebook = (payload)=>({
type:UPDATE_NOTEBOOK,
payload
})
const DeleteNotebook = (payload)=>({
type:DELETE_NOTEBOOK,
payload
})

//THUNKS




