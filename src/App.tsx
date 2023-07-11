import { FC } from 'react';

import { Posts, Users } from './components';
import { usePostByUserId, useUsers } from './myCustomHooks';

const App:FC = () => {

    const [users] = useUsers();
    const { posts, setUserId } = usePostByUserId();

    return (
        <div>
            <Users users={users} setUserId={setUserId}/>
            <hr/>
            {!!posts?.length && <Posts posts={posts}/>}
        </div>
    );
};

export { App };
