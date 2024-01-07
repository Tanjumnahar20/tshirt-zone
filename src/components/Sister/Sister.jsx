/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] =useContext(MoneyContext)
    return (
        <div>
            <h4>sister</h4>
            <p>grandpa:{money}</p>
        </div>
    );
};

export default Sister;