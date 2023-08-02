import { Component, ReactNode } from 'react';

import { ICar } from '../../interfaces';
import { carService } from '../../services/carService';
import { Car } from '../Car/Car';

interface IProps {
    children?: ReactNode
}

interface IMyState  {
    cars: ICar[]
}

class Cars extends Component<IProps, IMyState> {

    constructor(props:IProps) {
        super(props);
        this.state = {
            cars: [],
        };
    }

    async componentDidMount():Promise<void> {
        const { data: cars } = await carService.getAll();
        this.setState({ cars });
    }

    render() {
        const { cars } = this.state;
        return (
            <>
                {!!cars?.length && cars.map(value => <Car car={value} key={value.id}/>)}
            </>
        );
    }
}

export { Cars };
