import React, { FC, ReactNode } from 'react';

import { ICompany } from '../../interfaces';

interface IProps {
    company: ICompany
    children?: ReactNode
}
const Company:FC<IProps> = ({ company }) => {

    const { name, bs, catchPhrase } = company;

    return (
        <ul>
            <h2>COMPANY</h2>
            <li><strong>NAME:</strong> {name}</li>
            <li><strong>CATCH PHRASE:</strong> {catchPhrase}</li>
            <li><strong>BS:</strong> {bs}</li>
        </ul>
    );
};

export { Company };
