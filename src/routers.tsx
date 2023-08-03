import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ERouterPoints } from './configs';
import { Layout } from './layout';
import { CommentsPage, PostsPage, UsersPage } from './pages';


export const routers = createBrowserRouter([
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
                path: ERouterPoints.USERS,
                element: <UsersPage/>,
            },
            {
                path: ERouterPoints.COMMENTS,
                element: <CommentsPage/>,
            },
        ],
    },
]);
