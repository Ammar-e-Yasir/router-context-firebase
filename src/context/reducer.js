// import React from "react";

  export let data = {
      snack:'Oreo',
      authUser:{},
    
  };

 export function reducer(state , action){
     switch(action.type){
         case "AUTH_USER" : {
             
             
            //  console.log(state.authUser)
             return{
                 ...state,
                 authUser:action.payload
                 
                }
         }

         default :
         return state;
     }
 }
  