import { Link, useNavigate } from 'react-router-dom'
import './LoginStyles.css'
import React, { useState } from 'react'
 const Login = () => {
const history = useNavigate();
  const gotoSignup = () => {
    history('/register')
  }
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })

  const getUserData = (e) =>{
    const {value, name} = e.target;
    
    setInputVal(() =>{
      return{
        ...inputVal,
        [name] : value
      }
    })
  };
  const validateUser = async (e) =>{
    
    e.preventDefault();
      const response = await fetch("http://localhost:8080/api/login", {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: inputVal.email, password: inputVal.password })
  
      });
      const json = await response.json()
      console.log(json);
      if (json.success) {
        alert("Login successful.")
        //save the auth toke to local storage and redirect
        localStorage.setItem('userEmail', inputVal.email)
         localStorage.setItem('token', json.authToken)
        history("/");
  
      }
      else {
        alert("Enter Valid Credentials")
      }
      }
    
    
  
  return (
    <div className='login-container'>
        <form>
            <h2>Wellcome!</h2>
            <input type='email' name='email' onChange={getUserData} placeholder='enter your email' />
            <input type='password' name='password' onChange={getUserData} placeholder='enter your password' />
            <button className='btn-login' type='submit'onClick={validateUser}>Log in</button>
            <button className='btn-signup' onClick={gotoSignup}>Sign up</button>
           
            

        </form>
    </div>
  )
}
export default Login