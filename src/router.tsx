import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MyLayout } from './layout';
import { ERouterPoints } from './configs';
import { MoviesListCardPage, MoviesPage } from './Containers';

const router = createBrowserRouter([
    {
        path: ERouterPoints.BASE,
        element: <MyLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterPoints.MOVIES_LIST}/>,
            },
            {
                path: ERouterPoints.MOVIES_LIST,
                element: <MoviesPage/>,
            },
            {
                path: ERouterPoints.MOVIE_ID,
                element: <MoviesListCardPage/>,
            },
        ],
    },
]);

export { router };
