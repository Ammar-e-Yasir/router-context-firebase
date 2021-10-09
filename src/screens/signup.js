import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './form/form.css'
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form,Row,Col,Button} from 'react-bootstrap';
import { auth, createUserWithEmailAndPassword, signOut } from "../config/firebase";
import { GlobalContext } from "../context/context";



export default function SignUp() {
  const { state, dispatch } = useContext(GlobalContext)
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [authUser , setUser] = useState({});



  const register = async () => {

    // let user = {username,email,password,role};



    try {
      let { user } = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(user);

      dispatch({ type: "AUTH_USER", payload: user })

      setUserName('');
      setEmail('');
      setPassword('');
      setRole('');

    }
    catch (err) {
      setErrMsg(err.message);
      setTimeout(() => {
        setErrMsg('');
      }, 3000)

    }





  }

  const logout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }








  return (
    <div>




      <div className='container'>

        {errMsg ? <p className='errMsg'>{errMsg}</p> : null}


        <h1>REGISTER ! </h1>
        <div>
          <label>Username</label>
          <input type='text' value={username} onChange={(e) => { setUserName(e.target.value) }} />
        </div>

        <div>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>


        <div>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>

        <div>
          <span>Role</span>
          <label><input type='radio' name='user' value={role} onClick={() => { setRole('teacher') }} />Teacher</label>
          <label><input type='radio' name='user' value={role} onClick={() => { setRole('student') }} />Student</label>
        </div>


        <div>
          <button onClick={register}> Register</button>
        </div>


        <div>
          <button onClick={logout}> Logout</button>
        </div>
        <div>
          <b>Already have account? <Link to='/signin'>login</Link></b>
        </div>


      </div>





    </div>
  )






  /* return (
         <div>
        
   <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
     <Form.Label column sm={2}>
       Email
     </Form.Label>
     <Col sm={10}>
       <Form.Control type="email" placeholder="Email" />
     </Col>
 </Form.Group>

   <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
     <Form.Label column sm={2}>
       Password
     </Form.Label>
     <Col sm={10}>
       <Form.Control type="password" placeholder="Password" />
     </Col>
   </Form.Group>
   <fieldset>
     <Form.Group as={Row} className="mb-3">
       <Form.Label as="legend" column sm={2}>
         Radios
       </Form.Label>
       <Col sm={10}>
       {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Teacher"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Student"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      
    </div>
  ))}


      </Col>
    </Form.Group>
  </fieldset>
  

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 0 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>


  
  

</div>
    ) */



}