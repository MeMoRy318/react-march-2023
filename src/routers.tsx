import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ERouterPoint } from './configs';
import { MyLayouts } from './layouts';
import { CarsPage, LoginPage, NotFoundPage, RegisterPage } from './pages';

const routers = createBrowserRouter([
    {
        path: ERouterPoint.BASE,
        element: <MyLayouts/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterPoint.CARS}/>,
            },
            {
                path: ERouterPoint.CARS,
                element: <CarsPage/>,
            },
            {
                path: ERouterPoint.LOGIN,
                element: <LoginPage/>,
            },
            {
                path: ERouterPoint.REGISTER,
                element: <RegisterPage/>,
            },
            {
                path: ERouterPoint.NOT_FOUND,
                element: <NotFoundPage/>,
            },
        ],
    },
]);

export { routers };
