import React, { FC, ReactNode } from 'react';

import { IAddress } from '../../interfaces';

interface IProps {
    address: IAddress
    children?: ReactNode
}
const UserAddress:FC<IProps> = ({ address }) => {

    const { street, city, suite, zipcode } = address;

    return (
        <ul>
            <h2>ADDRESS</h2>
            <li><strong>CITY:</strong> {city}</li>
            <li><strong>STREET:</strong> {street}</li>
            <li><strong>SUITE:</strong> {suite}</li>
            <li><strong>ZIP CODE:</strong> {zipcode}</li>
        </ul>
    );
};

export { UserAddress };
