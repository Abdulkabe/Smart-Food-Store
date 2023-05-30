import React, { useState } from 'react'
import stores from '../storesdata'
export default function Homescreen() {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('1 kg')

    


    return (
        <div>
            <div className="row">
                {stores.map(store => {

                    return <div className="col-md-4">
                        <div>
                            {store.name}
                            <br />
                            <br />

                            <img src={store.image} className="img-fluid" style={{ height: '250px', width: '300px' }} />
                            <div className="flex-container">
                                <div className='w-100'>
                                    <p>Varients</p>
                                    <select value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                                        {store.varients.map(varient => {
                                            return <option value={varient}>{varient}</option>
                                        })}
                                    </select>
                                </div >
                                <div className='w-100'>
                                    <p>Quantity</p>
                                    <select value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                                        {[...Array(5).keys()].map((x, i) => {
                                            return <option value={i + 1}>{i + 1}</option>
                                        })

                                        }
                                    </select>
                                </div>



                            </div>
                        </div>
                    </div>

                })}
                <div className="flex-container">

                    <div>

                        {/* <h1>Price : {stores[0].prices[0][varient] * quantity}</h1> */}
                    </div>
                </div>


            </div>
        </div>
    )
}