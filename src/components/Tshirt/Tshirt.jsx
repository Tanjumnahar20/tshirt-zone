/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const  {picture,name,price} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />

            <h4>name:{name}</h4>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;