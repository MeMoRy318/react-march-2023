import { useEffect } from 'react';

import { useMySelector } from './myCustomHooks';
import { useAction } from './myCustomHooks/useAction';

const App = () => {

    const { users, isLoading, error } = useMySelector(state => state.userReducer);
    const { fetchUsers } = useAction();


    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};

export { App };
