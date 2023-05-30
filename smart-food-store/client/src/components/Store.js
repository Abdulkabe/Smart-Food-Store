import React from 'react'
import stores  from '../storesdata'
export default function Store({store}){
    console.log(stores[0].image)
    const popeye = stores.map(item => {
        return(
            <>
                <p>{item.name}</p>
                <img src = {item.image}/>
                
                
            </>

        )
    })
    return(
        <div>
            
        </div>
    )
}