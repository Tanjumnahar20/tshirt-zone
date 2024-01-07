/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()

    // state declaration
    const [cart,setCart] =useState([]);
   
    const handleAddToCart=tshirt=>{
        const newCart =[...cart,tshirt];
        setCart(newCart)
    }

    // handle remove from cart

    const handleRemove=id=>{
        const remaining = cart.filter(ts=>ts._id!==id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt =><Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart ={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemove={handleRemove}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;