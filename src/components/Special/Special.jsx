/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <p>special</p>
                <p>gift:{ring}</p>
        </div>
    );
};

export default Special;