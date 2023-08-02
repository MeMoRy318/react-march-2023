import { Component, ReactNode } from 'react';

import { Posts } from '../../components';

interface IProps {
    children?: ReactNode
}
class PostsPage extends Component<IProps> {
    render() {
        return (
            <div>
                <Posts/>
            </div>
        );
    }
}

export { PostsPage };
