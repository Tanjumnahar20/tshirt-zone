/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const ring= useContext(RingContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>abir:{ring}</Cousin>
                <Cousin>nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;