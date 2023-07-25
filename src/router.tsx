import { createBrowserRouter } from 'react-router-dom';

import { MyLayout } from './layout';
import { ERouterPoints } from './configs';

const router = createBrowserRouter([
    {
        path: ERouterPoints.BASE,
        element: <MyLayout/>,
    },
]);

export { router };
