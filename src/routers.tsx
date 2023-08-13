import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MyLayout } from './MyLayout/MyLoyalty';
import { ERouterEndpoints } from './configs';
import { CommentsPage, PhotosPge, PostsPage, UsersPage } from './pages';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <MyLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterEndpoints.USER}/>,
            },
            {
                path: ERouterEndpoints.USER,
                element: <UsersPage/>,
            },
            {
                path: ERouterEndpoints.POSTS,
                element: <PostsPage/>,
            },
            {
                path: ERouterEndpoints.COMMENT,
                element: <CommentsPage/>,
            },
            {
                path: ERouterEndpoints.PHOTO,
                element: <PhotosPge/>,
            },
        ],
    },
]);

export { routers };
