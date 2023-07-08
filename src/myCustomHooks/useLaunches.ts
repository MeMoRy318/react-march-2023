import React, { useEffect, useState } from 'react';

import { launchService } from '../services';
import { filterLaunches, mapLaunches } from '../utility';
import { ILaunch } from '../interfaces';

type ISetLaunchesFunction = React.Dispatch<React.SetStateAction<ILaunch[]>>;

const useLaunches = ():[ ILaunch[], ISetLaunchesFunction ] => {

    const [launches, setLaunch] = useState<ILaunch[]>([] );

    useEffect(() => {

        launchService.getAllLaunches().then(({ data }) => {
            setLaunch(  mapLaunches( filterLaunches( data ) ) );
        });

    }, []);

    return [ [...launches], setLaunch ];

};

export { useLaunches };

