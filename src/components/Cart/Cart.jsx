/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemove}) => {
    // conditional rendering
    let message;
    if(cart.length===0){
        message = <p>Add to cart</p>
    }

    else{
        message=<div>
            <p>Thanks for adding</p>
        </div>
    }

    return (
        <div>
            <h1 className={cart.length==1 ? 'blue' :'purple'}>order summary:{cart.length}</h1>
             {cart.length>2 ?
             <span className='orange'>buy more</span>
             :<span>dont have money?</span>
            }
            {message}
            {
                cart.map(tshirt=><p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemove(tshirt._id)}>remove</button></p>)
            }

            {
                cart.length==3 && <p>Tripple bonanaza!</p>

            }
            {
               cart.length==4 || <p>dont miss 4*4!</p>
            }
            <button className={`bold ${cart.length===5 ? 'yellow' :'green'}`}>buy</button>
        </div>
    );
};

export default Cart;

/***
 * conditional rendering
 * 1.in if else condition you can pass an element,div,compo
 * 2.ternary operator
 * 3.logical &&(if the statement is true,next thing will be displayed)
 * 4. logical || (if the statement is false,next thing will be displayed)
 * **/ 

/**conditional css class
 * 1.use ternary
 * 2.template ternary
 * **/ 