import React from "react"
import './App.css';
import Cart from "./Cart"
import memesData from "./memesData.js"

export default function App() {
  const [cartInfo , setCartInfo] = React.useState({
    id: "",
    name: "",
    url: ""
  })

  const [data, setData] = React.useState(memesData.data.memes)
  function randomCalls(){
    const randomNumber = Math.floor(Math.random() * data.length)
    setCartInfo(() => {
      return{
        id: data[randomNumber].id,
        name: data[randomNumber].name,
        url: data[randomNumber].url
      }
    })
  }
  return (
    <>
      <button onClick={randomCalls} className="bg-indigo-500">Random API Calls</button>
      <Cart 
        id = {cartInfo.id}
        url = {cartInfo.url}
        name = {cartInfo.name}
      />
    </>
  );
}

