import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MyLayout } from './layout';
import { ERouterPoints } from './configs';
import { AlbumsPage, CommentsPage, NotFoundPage, PostsPage, TodosPage } from './pages';

export const routers = createBrowserRouter([
    {
        path: ERouterPoints.BASE,
        element: <MyLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterPoints.ALBUMS}/>,
            },
            {
                path: ERouterPoints.ALBUMS,
                element: <AlbumsPage/>,
            },
            {
                path: ERouterPoints.TODOS,
                element: <TodosPage/>,
            },
            {
                path: ERouterPoints.COMMENTS,
                element: <CommentsPage/>,
                children: [
                    {
                        path: ERouterPoints.POST_ID,
                        element: <PostsPage/>,
                    },
                ],
            },
            {
                path: ERouterPoints.NOT_FOUND_PAGE,
                element: <NotFoundPage/>,
            },
        ],
    },
]);
