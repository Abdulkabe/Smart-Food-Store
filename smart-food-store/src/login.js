import { Link, useNavigate } from 'react-router-dom'
import './LoginStyles.css'
import React, { useState } from 'react'

 const Login = () => {
  const gotoSignup = () => {
    history('/register')
  }
  const history = useNavigate();
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
  const validateUser = (e) =>{
    const {email, password} = inputVal;
    const userRecord = localStorage.getItem('userInfo');
    e.preventDefault();
    if(email === ""){
      alert('Email is required.')
    }
    else if(password === ''){
      alert('Password is required.')
    }
    else{
          if(userRecord && userRecord.length){
            const userData1 = JSON.parse(userRecord);
            const userLogin = userData1.filter((el, k) =>{
              return el.email === email && el.password === password
            })
            if(userLogin.length === 0){
              alert("User doest not exist.")
            }
            else{
              localStorage.setItem('userLogin', JSON.stringify(userLogin));
              history('/home');
            }
          }
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