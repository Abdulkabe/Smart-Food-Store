import React from "react";
import bread from "./bread.jpg"
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { useState } from "react"
import memesData from "./memesData.js"
export default function Cart(props) {
 /*    const [obj, setObj] =  React.useState({
        id: "",
        url: "",
        amount: 0
    }) */
    const [quantity, setQuantity] = React.useState([])
    console.log(props.name)
    React.useEffect(() => {
        if(quantity.length === 0){
            //setObj({id: props.id, url: props.url, amount: 1})
            setQuantity([{id:props.id,name:props.name,url:props.url,amount:1}])
        }
        else{
            let flag = false;
            for (let i =0; i < quantity.length; i++){
                if(props.id === quantity[i].id){
                    setQuantity(prev => {
                        let updatedArray = [...prev]
                        updatedArray[i] = {...updatedArray[i], amount: updatedArray[i].amount + 1}
                        flag = true;
                        return updatedArray;
                    })
                }
            }
            if (flag === false){
                setQuantity(prev => [...prev,{id:props.id,name:props.name,url:props.url,amount:1}])
            }
            
        }
        console.log(quantity.length)
        console.log(quantity)
    }, [props])
    
       const display = quantity.map(item => {
        return(
            <div>
                    <img className="prop--images" src = {item.url} />
                    <h5>{item.name}</h5>
                    <section className="button--section">
                        <button>+</button>
                        <p>{item.amount}</p>
                        <button>+</button>
                    </section>
            </div>
        )}) 
        
        //const display = quantity.map(item => {return(<img src = {item.url} />)}) 
     
    return (
        <div>
            {quantity.length === 0 ? 
                <p className="text-center ">Nothing to show here</p> 
                : 
                <div className="main--prop--div"> 
                    <div className="prop--left--items"> {display} </div>  
                    <div className="prop--right--cards">Price</div>
                </div>

            }


           {/*  {quantity.map(item =>  { return(
                <h1>{item.id}</h1>
            )})} */}
          
        </div>
    )
}