import { lazy, Suspense } from 'react';

export enum ELazyLoadRoutes {
    USERS_PAGE='UsersPage',
    POSTS_PAGE='PostsPage',
    COMMENTS_PAGE='CommentsPage',
    PHOTOS_PAGE='PhotosPage'
}

export const LazyLoadRoutes = (componentName: ELazyLoadRoutes) => {
    const LazyElement = lazy(() => import(`../pages/${componentName}/${componentName}.tsx`));

    return (
        <Suspense fallback="Loading...">
            <LazyElement/>
        </Suspense>
    );
};
