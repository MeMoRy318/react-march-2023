import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MyLayout } from './layout';
import { ERouterEndpoints } from './configs';
import { CommentsPage, PostsPage, UsersPage } from './pages';

export const  router = createBrowserRouter([
    {
        path: ERouterEndpoints.BASE,
        element: <MyLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterEndpoints.USERS}/>,
            },
            {
                path: ERouterEndpoints.USERS,
                element: <UsersPage/>,
            },
            {
                path: ERouterEndpoints.POSTS,
                element: <PostsPage/>,
            },
            {
                path: ERouterEndpoints.COMMENTS,
                element: <CommentsPage/>,
            },
        ],
    },
]);
