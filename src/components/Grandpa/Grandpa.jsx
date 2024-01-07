/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../uncle/uncle';
import Aunty from '../Aunty/Aunty';
import { createContext } from 'react';
export const RingContext = createContext('golden ring');
export const MoneyContext= createContext(0)
 

const Grandpa = () => {
    const [money,setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>has money:{money}</p>
           <MoneyContext.Provider value={[money,setMoney]}>
           <RingContext.Provider value='golden ring'>
            <section className='flex'>
                <Father>Father</Father>
                <Uncle>Uncle</Uncle>
                <Aunty>Aunty</Aunty>
            </section>
            </RingContext.Provider>
           </MoneyContext.Provider>
           
            
        </div>
    );
};

export default Grandpa;