import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ERouterEndpoints } from './configs';
import { Layout } from './layout/Layout';
import { CarsPage, LoginPage, RegisterPage } from './pages';

const routers = createBrowserRouter([
    {
        path: ERouterEndpoints.BASE,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterEndpoints.CARS}/>,
            },
            {
                path: ERouterEndpoints.CARS,
                element: <CarsPage/>,
            },
            {
                path: ERouterEndpoints.LOGIN,
                element: <LoginPage/>,
            },
            {
                path: ERouterEndpoints.REGISTER,
                element: <RegisterPage/>,
            },
        ],
    },
]);

export { routers };
