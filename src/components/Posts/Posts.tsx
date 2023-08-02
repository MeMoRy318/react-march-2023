import { Component, ReactNode } from 'react';

import { IPost } from '../../interfaces';
import { postService } from '../../services';
import { Post } from '../Post/Post';

interface IProps {
    children?: ReactNode
}
interface IMyState  {
    posts: IPost[]
}

class Posts extends Component<IProps, IMyState> {

    constructor(props:IProps) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    async componentDidMount():Promise<void> {
        const { data: posts } = await postService.getAll();
        this.setState({ posts });
    }

    render() {
        const { posts } = this.state;
        return (
            <>
                {!!posts?.length && posts.map(value => <Post post={value} key={value.id}/>)}
            </>
        );
    }
}

export { Posts };
