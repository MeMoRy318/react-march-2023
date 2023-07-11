import React, { FC } from 'react';

import { Launch } from '../index';
import { useLaunches } from '../../myCustomHooks';

const Launches: FC = () => {

    const [launches] = useLaunches();

    return (
        <div>
            { !!launches?.length && launches.map(value => <Launch launch={value} key={value.key}/>)}
        </div>
    );
};

export { Launches };
