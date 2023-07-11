import { FC } from 'react';

import { Users } from './components';
import { useUsers } from './myCustomHooks';

const App:FC = () => {

    const [users] = useUsers();

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export { App };
