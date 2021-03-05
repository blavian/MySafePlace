//normalized data
 //    newState= {}
        //    action.title.forEach((item)=>{
        //        newState[item.id]={
        //            id:item.id,
        //            title:item.title
        //        }
        //     })
            // return newState



//Action constants
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

 const createNotebookActionCreator=(title)=>({
     type:CREATE_NOTEBOOK,
     title
 })

//THUNKS
export const getNotebook = () =>async(dispatch)=>{
    const response = await fetch("/api/notebooks",{
        headers:{
            "Content-Type": "application/json",
        },
    })
    if (response.ok){
        let {data} = await response.json()
       
        dispatch(
            setNotebook(data)
        )
}
}
export const createNotebook =(title)=>async(dispatch)=>{
    const response = await fetch("/api/notebooks", {
        method: "POST",
        body:JSON.stringify({
            title
        }),
        headers:{
            'Content-type':'application/json'
        },
    })
    debugger
    if(!response.ok) throw response
    const {data} = await response.json()
    
    dispatch(createNotebookActionCreator(data))
}
     

//NOTEBOOK INITIAL STATE 
const initialState = {}
const reducer =(state = initialState,action) => {
        switch (action.type) {
          case SET_NOTEBOOK:
              return action.title
          case CREATE_NOTEBOOK:
            return {...state, ...action.title}

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


