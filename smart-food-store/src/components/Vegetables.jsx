import React from 'react'
import { useParams } from "react-router-dom";
import { vegetablesInfo } from './subFiles/Data';
import { LoginContext } from '../Context.js/LoginContext';
const Vegetables = () => {
    const {cartData, setCartData} = React.useContext(LoginContext)
    const param = useParams();
    let vegetable = "";
    function findVegetable() {
        vegetablesInfo.forEach(itemVegetable => {
            // eslint-disable-next-line
            if (itemVegetable.id == param.id) {
                vegetable = itemVegetable;
            }
        })
    }
    findVegetable();

    function check(){
        
        setCartData(prev => {
            let updatedCart = [];
            if(cartData.length === 0){updatedCart.push(vegetable)}
            updatedCart = [...prev]
            updatedCart.push(vegetable)
            return updatedCart   
        })
        console.log(cartData)
    }
    return (
        <div className='fpDiv'>
            <img className="fpImg" src={vegetable.image} alt="Potato" />
            <p className="fpPrice">Rs. {vegetable.prices}</p>
            <h3 className="fpHead">{vegetable.head}</h3>
            <p className="fpDisc">{vegetable.disc}</p>
            <hr className="e2" />
            <h3 className="fpVariation">Select Variation</h3>
            <label for="option1">
                <input type="radio" className="fpQuantity1" name="option" value="option1" />
                {vegetable.quantity * 0.5} {vegetable.priceTag}
            </label>
            <span className="fpPrice1">Rs. {vegetable.price * 0.5}</span>
            <br />
            <label for="option2">
                <input type="radio" className="fpQuantity2" name="option" value="option2" />
                {vegetable.quantity} {vegetable.priceTag}
            </label>
            <span className="fpPrice2">Rs. {vegetable.price * 1}</span>
            <br />
            <label for="option3">
                <input type="radio" className="fpQuantity3" name="option" value="option3" />
                {vegetable.quantity * 2} {vegetable.priceTag}
            </label>
            <span className="fpPrice3">Rs. {vegetable.price * 2}</span>
            <br />
            <label for="option4">
                <input type="radio" className="fpQuantity4" name="option" value="option4" />
                {vegetable.quantity * 3} {vegetable.priceTag}
            </label>
            <span className="fpPrice4">Rs. {vegetable.price * 3}</span>
            <br />
            <label for="option5">
                <input type="radio" className="fpQuantity5" name="option" value="option5" />
                {vegetable.quantity * 5} {vegetable.priceTag}
            </label>
            <span className="fpPrice5">Rs. {vegetable.price * 5}</span>
            <button onClick= {check} className="fpAdd">Add to Cart</button>
        </div>
    )
}
export default Vegetables;