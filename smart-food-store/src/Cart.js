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
    }, [props])

    function add(itemId){
        console.log(itemId)
         for (let i = 0; i < quantity.length; i++){
            const temp = quantity[i]
            if(itemId === temp.id){
                setQuantity(prev => {
                    let updatedArray = [...prev]
                    updatedArray[i] = {...updatedArray[i], amount: updatedArray[i].amount + 1}
                    return updatedArray
                })
            }
        } 
    }

    function minus(itemId){
        console.log(itemId)
         for (let i = 0; i < quantity.length; i++){
            const temp = quantity[i]
            if(itemId === temp.id){
                setQuantity(prev => {
                    let updatedArray = [...prev]
                    updatedArray[i] = {...updatedArray[i], amount: updatedArray[i].amount - 1}
                    //I need to check the index of that element and remove it
                    if(updatedArray[i].amount === 0){
                        const index = updatedArray.indexOf(updatedArray[i])
                        updatedArray.splice(index,1)
                    }
                    return updatedArray
                })
            }
        } 
    }
    
       const display = quantity.map(item => {
        return(
            <div>
                    <img className="prop--images" src = {item.url} />
                    <h5>{item.name}</h5>
                    <section className="button--section">
                        <button onClick={() => add(item.id)}>+</button>
                        <p>{item.amount}</p>
                        <button onClick={() => minus(item.id)}>-</button>
                    </section>
            </div>
        )})
        
        const items = quantity.map(item => {
            return(
                <div>
                    <section className="card--style">
                        <h3>{item.name}:</h3>
                        <h3>{item.amount}x</h3>
                    </section>
                </div>
            )
        }

        )
        
        //const display = quantity.map(item => {return(<img src = {item.url} />)}) 
     
    return (
        <div>
            {quantity.length === 0 ? 
                <p className="text-center ">Nothing to show here</p> 
                : 
                <div className="main--prop--div"> 
                    <div className="prop--left--items"> <h1>Food Items</h1> {display} </div>  
                    <div className="prop--right--cards">
                        <h1>Checkout Order</h1>
                        <hr/>
                        <div className="bb--space">{items}</div>
                        <button className="checkout--button">Place Order</button>
                    </div>
                    
                </div>

            }


           {/*  {quantity.map(item =>  { return(
                <h1>{item.id}</h1>
            )})} */}
          
        </div>
    )
}