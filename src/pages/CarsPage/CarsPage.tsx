import { Component, ReactNode } from 'react';

import { Cars } from '../../components';

interface IProps {
    children?: ReactNode
}
class CarsPage extends Component<IProps> {
    render() {
        return (
            <div>
                <Cars/>
            </div>
        );
    }
}

export { CarsPage };
