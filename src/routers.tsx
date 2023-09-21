import { createBrowserRouter, Navigate } from 'react-router-dom';

import { EPoints } from './constans';
import { Layout } from './layout';
import { PostPage, UserPage } from './pages';

const routers = createBrowserRouter([{
    path: EPoints.BASE,
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Navigate to={EPoints.USERS}/>,
        },
        {
            path: EPoints.USERS,
            element: <UserPage/>,
        },
        {
            path: EPoints.POSTS,
            element: <PostPage/>,
        },
        {
            path: EPoints.COMMENTS,
            element: <PostPage/>,
        },
    ],
}]);

export { routers };
