import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';

import { ERouterEndpoints } from './configs';
import { ELazyLoadLayout, ELazyLoadRoutes, LazyLoadLayout, LazyLoadRoutes } from './Hok';

const routers = createBrowserRouter([
    {
        path: ERouterEndpoints.BASE,
        element: LazyLoadLayout(ELazyLoadLayout.MY_LAYOUT),
        children: [
            {
                index: true,
                element: <Navigate to={ERouterEndpoints.USER}/>,
            },
            {
                path: ERouterEndpoints.USER,
                element: LazyLoadRoutes(ELazyLoadRoutes.USERS_PAGE),
            },
            {
                path: ERouterEndpoints.POSTS,
                element: LazyLoadRoutes(ELazyLoadRoutes.POSTS_PAGE),
            },
            {
                path: ERouterEndpoints.COMMENT,
                element: LazyLoadRoutes(ELazyLoadRoutes.COMMENTS_PAGE),
            },
            {
                path: ERouterEndpoints.PHOTO,
                element: LazyLoadRoutes(ELazyLoadRoutes.PHOTOS_PAGE),
            },
        ],
    },
]);

export { routers };
