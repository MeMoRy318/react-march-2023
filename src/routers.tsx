import { createBrowserRouter } from 'react-router-dom';

import { MyLayout } from './layout/MyLayout';


const routers = createBrowserRouter([
    {
        path: '/',
        element: <MyLayout/>,
    },
]);

export { routers };
