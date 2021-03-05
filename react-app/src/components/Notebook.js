import React, {useState,useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import{getNotebook} from "../redux-store/notebook"

 const Notebook = () => {
   const dispatch = useDispatch();
   const currentNotebooks = useSelector((state) => {
     return Object.values(state.notebook);
     
   });
   useEffect(async () => {
     dispatch(getNotebook());
   }, [dispatch]);
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
     </div>
   );
 };

 export default Notebook