//Action constantS
const CREATE_NOTEBOOK = "notebook/create_notebook"
const SET_NOTEBOOK =    "notebook/set_notebook"
const UPDATE_NOTEBOOK = "notebook/update_notebook"
const REMOVE_NOTEBOOK = "notebook/remove_notebook"

//Action Creator
const setNotebook = (title)=>({
    type:SET_NOTEBOOK,
    title,
 })

 const updateNotebook = (title)=>({
     type:UPDATE_NOTEBOOK,
     title
 })
 const RemoveNotebook = (title)=>({
     type:REMOVE_NOTEBOOK,
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
    if(!res.ok) throw res
    const data = await res.json()
    dispatch(createNotebook(data.data))
     
}

export const getNotebook = () =>async(dispatch)=>{
    const response = await fetch("/api/notebooks",{
        headers:{
            "Content-Type": "application/json",
        },
    })
    if (response.ok){
        let data = await response.json()
        dispatch(
            setNotebook(data.data))
    }
}

//NOTEBOOK INITIAL STATE 
const initialState = {}
const reducer =(state = initialState,action) => {
        let newState;
        switch (action.type) {
          case SET_NOTEBOOK:

           newState= {}
           action.title.forEach((item)=>{
               newState[item.id]={
                   id:item.id,
                   title:item.title
               }
            })
            return newState
          
            case CREATE_NOTEBOOK:
                return{
                    ...state,[action.title.id]:action.title
                }
                default:
                    return state
            }
        }
                
//   "data": [
//     {
//       "id": 9,
//       "title": "hello",
//       "user_id": 5
//     }
//   ],
//   "message": "success"
// }
//         }
//     }

export default reducer


