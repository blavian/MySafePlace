import React, {useState,useEffect } from "react";

import { useDispatch, useSelector} from "react-redux";
import{getNotebook,createNotebook} from "../redux-store/notebook"
import TopRight from "../styled/top-right";
import Button from "../styled/button"
 

 const Notebook = () => {
   const dispatch = useDispatch();
   const [title,setTitle] = useState('')
   const currentNotebooks = useSelector(state => Object.values(state.notebook))
     
   useEffect(async () => {
     dispatch(getNotebook());
   }, [dispatch]);
   
   
   const handleSubmit = async e =>{
     e.preventDefault()
     await dispatch(createNotebook(title))
     setTitle("")
   }
   const updateTitle = e=>setTitle(e.target.value)
   return (
     <>
       <p> Notebooks </p>
       {currentNotebooks &&
         currentNotebooks.map((notebook) => {
           return <div>{notebook.title}</div>;
         })}
       <TopRight>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           name="title"
         />
         <Button type="submit">Add a new Notebook</Button>
         {/* <Button onClick={(evt) => updateTitle(evt)} type="button">
           Update
         </Button> */}
       </form>
       </TopRight>
     </>
   );
 };

 export default Notebook