import { Component, ReactNode } from 'react';

import { ICar } from '../../interfaces';

interface IProps {
    children?: ReactNode
    car: ICar
}
class Car extends Component<IProps> {
    render() {
        const { year, brand, price, id } = this.props.car;
        return (
            <ul>
                <li>ID: {id}</li>
                <li>BRAND: {brand}</li>
                <li>PRICE: {price}</li>
                <li>YEAR: {year}</li>
            </ul>
        );
    }
}

export { Car };
