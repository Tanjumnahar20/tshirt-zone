/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] =useContext(MoneyContext);
    return (
        <div>
           <h2>Uncle</h2> 
           <p>money:{money}</p>
           <button onClick={()=>setMoney(money +1000)}>send money</button>
           <section className='flex'>
            <Cousin>nabil</Cousin>
            <Cousin>nabila</Cousin>
           </section>
        </div>
    );
};

export default Uncle;