/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({cart,handleRemove}) => {
    return (
        <div>
            <h1>order summary:{cart.length}</h1>
            {
                cart.map(tshirt=><p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemove(tshirt._id)}>remove</button></p>)
            }
        </div>
    );
};

export default Cart;