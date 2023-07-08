import { PostDetails, Users } from './components';
import { useUserIdPosts } from './myCustomHooks';

const App = () => {

    const { posts, setPostId } = useUserIdPosts();

    return (
        <div>
            <Users setPostId={ setPostId }/>
            <hr/>
            {!!posts?.length && posts.map(value => <PostDetails post={ value } key={ value.id }/>)}
        </div>
    );
};

export { App };
