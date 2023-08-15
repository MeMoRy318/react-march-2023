import { lazy, Suspense } from 'react';

export enum ELazyLoadLayout {
    MY_LAYOUT='MyLayout'
}

export const LazyLoadLayout = (componentName: ELazyLoadLayout) => {
    const LazyElement = lazy(() => import(`../MyLayout/${componentName}.tsx`));

    return (
        <Suspense fallback="Loading...">
            <LazyElement/>
        </Suspense>
    );
};
