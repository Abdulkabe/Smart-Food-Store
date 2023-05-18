import React from 'react'
import { Items } from './Item  galleries.js'
import image1 from './images/freshvegetables.png'
import image2 from './images/baked.jpg'
import image3 from './images/pantry-essentials-familystylefood.webp'


export const Home = () => {
    const products = [
        {
          image : image1,
          path : '/freshfoodslist',
          message : 'This is an image of fresh vegetables', 
          disc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi culpa dolorum ipsam harum consequuntur. Voluptate fugiat quisquam fuga explicabo ut?' 
        },
        {
            image : image2,
            path : '/bakedlist',
            message : 'This is an image of baked products like bread',
            disc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi culpa dolorum ipsam harum consequuntur. Voluptate fugiat quisquam fuga explicabo ut?' 
        },
        {
            image : image3,
            path : '/pantrieslist',
            message : 'This is an image of fresh pantries', 
            disc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi culpa dolorum ipsam harum consequuntur. Voluptate fugiat quisquam fuga explicabo ut?' 
        }
    ]
  return (
    <>
    <div className="backgroundimage">
    </div>
    <div className="categoryinput">
    {products.map((product)=>{
        return <Items image = {product.image} message = {product.message} disc = {product.disc} path = {product.path}/>
     })} 
    </div>   
    </>
  )
}

