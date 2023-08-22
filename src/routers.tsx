import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ERoutersEndpoint } from './configs';
import { MyLayout } from './layouts';
import { CarsPage } from './pages';

const routers = createBrowserRouter([
    {
        path: ERoutersEndpoint.BASE,
        element: <MyLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERoutersEndpoint.CARS}/>,
            },
            {
                path: ERoutersEndpoint.CARS,
                element: <CarsPage/>,
            },
        ],
    },
]);

export { routers };
