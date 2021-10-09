import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "../screens/signup"
import SignIn from "../screens/signin";

import { useEffect } from "react";
import { GlobalContext } from "../context/context";
import { auth,onAuthStateChanged } from "./firebase";
import { useContext } from "react";

export default function App(){

  const {state , dispatch } = useContext(GlobalContext);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
          dispatch({ type: "AUTH_USER", payload: user });
          console.log(user)
      }
      else {
          console.log('user not found');
      }
  })


  } , [])


// useEffect(()=>{console.log(state.authUser)},[state.authUser])






       return(
         <Router>

           <Switch>

             <Route exact path='/'>
               <SignUp />
             </Route>
             <Route path='/signin'>
               <SignIn />
             </Route>

           </Switch>
         </Router>
       )
}


