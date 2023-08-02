import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ERouterPoints } from './configs';
import { Layout } from './Layout';
import { CarsPage, CommentsPage, PostsPage } from './pages';

const router = createBrowserRouter([
    {
        path: ERouterPoints.BASE,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterPoints.POSTS}/>,
            },
            {
                path: ERouterPoints.POSTS,
                element: <PostsPage/>,
            },
            {
                path: ERouterPoints.COMMENTS,
                element: <CommentsPage/>,
            },
            {
                path: ERouterPoints.CAR,
                element: <CarsPage/>,
            },
        ],
    },
]);

export { router };
