import { useEffect } from 'react';

import { useAction } from './myCustomHook/useAction';

const App = () => {
    const { fetchComment, fetchPhoto } = useAction();

    useEffect(() => {
        fetchComment({ _limit: 10, _page: 2 });
        fetchPhoto({ _limit: 10, _page: 2 });
    }, []);

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};

export { App };
