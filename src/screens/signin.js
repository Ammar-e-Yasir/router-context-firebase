import React, { useContext, useState } from "react";
import './form/form.css'
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "../config/firebase";
import { auth } from "../config/firebase";
import { GlobalContext } from "../context/context";

//  import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form,Row,Col,Button} from 'react-bootstrap';



export default function SignIn() {
    const {state , dispatch} = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg , setErrMsg] = useState('');



    const login = async()=>{

        try{
        let {user} = await signInWithEmailAndPassword(auth,email,password);
        // console.log(user);
        
        dispatch({type:"AUTH_USER" , payload : user });
    
        setEmail('');
        setPassword('');
        }
        catch (err){   
           setErrMsg(err.message);

           setTimeout(()=>{
               setErrMsg('')
           },3000)
       
       }

    }




    return (
        <div>




            <div className='container'>
            {errMsg ? <p className='errMsg'>{errMsg}</p> : null }


                <h1>LOGIN ! </h1>


                <div>
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>


                <div>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>




                <div>
                    <button onClick={login}>Login</button>
                </div>

                <div>
        <b>Don't have any account? <Link to='/'>Register here</Link></b>
      </div>

            </div>




        </div>
    )

}