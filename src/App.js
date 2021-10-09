import React from "react";
import Routes from "./config/routes";
import ContextProvider from "./context/context";
// import { auth, onAuthStateChanged } from './config/firebase';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css".




 function App(){

 
   return(

  <ContextProvider>
    <Routes />
  </ContextProvider>
   )

       

}
export default App;
