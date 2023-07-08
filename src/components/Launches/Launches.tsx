import React, { FC } from 'react';

import { useLaunches } from '../../myCustomHooks';
import { Launch } from '../index';

const Launches: FC = () => {

    const [launches] = useLaunches();

    return (
        <div>
            { !!launches?.length && launches.map(value => <Launch launch={value} key={value.key}/>)}
        </div>
    );
};

export { Launches };
