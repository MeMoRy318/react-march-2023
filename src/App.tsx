import { FC } from 'react';

import { Posts, Users } from './components';
import { useUsers } from './myCustomHooks';
import { PostsContextTsx } from './hok';

const App:FC = () => {

    const [users] = useUsers();

    return (
        <PostsContextTsx>
            <Users users={users}/>
            <hr/>
            <Posts/>
        </PostsContextTsx>
    );
};

export { App };
