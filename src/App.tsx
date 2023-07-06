import { FC } from 'react';

import { Posts, Users } from './components';
import { useUserPosts } from './myCustomHooks';

const App:FC = () => {

    const { posts, setPostId, setPosts } = useUserPosts();

    return (
        <div>
            <Users setPostId={setPostId} setPosts={setPosts}/>
            {!!posts?.length && <Posts posts={posts}/>}
        </div>
    );
};

export { App };
