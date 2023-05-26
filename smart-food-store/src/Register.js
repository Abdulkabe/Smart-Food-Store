import { useNavigate } from 'react-router-dom'
import './LoginStyles.css'
import React, { useState } from 'react'

 const Signup = () => {
   const history = useNavigate();
   const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", phone: "" , password: ""});
  // const previusData = JSON.parse(localStorage.getItem('userInfo' || '[]'));
  // const [data, setData] = useState([previusData]);
  const getData = (e) =>{
    const {value, name} = e.target;

    setCredentials(() =>{
      return{
      ...credentials,
      [name]: value
      }
    })
  }
  const storeData = async (e) =>{
      e.preventDefault();
      
        const response = await fetch("http://localhost:8080/api/createuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email, phone: credentials.phone, password: credentials.password })
    });
    const json = await response.json()
        console.log(json);
         if (!json.success) {
            alert("Enter Valid Credentials")  
        }
        else{
          alert("User registered.");
          history('/login');
        }
    
    } 
      
  
  return (
    <div className='login-container'>
        <form>
            <h2>Wellcome!</h2>
            <input type='text' name='firstName' onChange={getData} placeholder='first Name' />
            <input type='text' name='lastName' onChange={getData} placeholder='last Name' />
            <input type='email' name='email' onChange={getData} placeholder='email' />
            <input type='text' name='phone' onChange={getData} placeholder='phone' />
            <input type='password' name='password' onChange={getData} placeholder='enter your password' />
            <button className='btn-signup1'onClick={storeData}type='submit'>Sign up</button>

        </form>
    </div>
  )
}
export default Signup