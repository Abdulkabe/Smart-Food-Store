import { useNavigate } from 'react-router-dom'
import './LoginStyles.css'
import React, { useState } from 'react'

 const Signup = () => {
   const history = useNavigate();
   const [inpValue, setInpValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',   
  }) 
  const previusData = JSON.parse(localStorage.getItem('userInfo' || '[]'));
  const [data, setData] = useState([previusData]);
  const getData = (e) =>{
    const {value, name} = e.target;

    setInpValue(() =>{
      return{
      ...inpValue,
      [name]: value
      }
    })
  }
  const storeData = (e) =>{
      const {firstname, lastname, email, phone, password} = inpValue;
      e.preventDefault();
      if(firstname === '' || lastname === ''){
        alert("Name is requied.")
      }
      else if(email === '' || !email.includes('@')){
        alert('Enter a valid email.')
      }
      else if(phone === ''){
        alert('Phone is requied.')
      }
      else if(password === ''){
        alert("Password is required.")
      }
      else{
        alert("Data submitted successfully.")
        localStorage.setItem('userInfo', JSON.stringify([...data,inpValue]));
        history('/login')
      }
  }
  return (
    <div className='login-container'>
        <form>
            <h2>Wellcome!</h2>
            <input type='text' name='firstname' onChange={getData} placeholder='first name' />
            <input type='text' name='lastname' onChange={getData} placeholder='last name' />
            <input type='email' name='email' onChange={getData} placeholder='email' />
            <input type='phone' name='phone' onChange={getData} placeholder='phone' />
            <input type='password' name='password' onChange={getData} placeholder='enter your password' />
            <button className='btn-signup1'onClick={storeData}type='submit'>Sign up</button>

        </form>
    </div>
  )
}
export default Signup