import React, {useState,useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import{getNotebook,createNotebook} from "../redux-store/notebook"

 const Notebook = () => {
   const dispatch = useDispatch();
   const [title,setTitle] = useState('')
   const currentNotebooks = useSelector(state => Object.values(state.notebook))
     
   useEffect(async () => {
     dispatch(getNotebook());
   }, [dispatch]);
   const handleSubmit = e =>{
     e.preventDefault()
     dispatch(createNotebook(title))
   }
   return (
     <div>
       <p> Notebooks </p>
       {currentNotebooks &&
         currentNotebooks.map((notebook) => {
           return (
             <>    
            <h1>{notebook.title}</h1>
               
             </>
           );
         })}
         <form onSubmit = {handleSubmit}>
           <input type='text' value = {title} onChange={e=>setTitle(e.target.value)} name="title" />
           <button type="submit">Add a new Notebook</button>
         </form>
     </div>
   );
 };

 export default Notebook