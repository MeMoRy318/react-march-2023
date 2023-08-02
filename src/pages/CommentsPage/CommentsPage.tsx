import { Component, ReactNode } from 'react';

import { Comments } from '../../components';

interface IProps {
    children?: ReactNode
}
class CommentsPage extends Component<IProps> {
    render() {
        return (
            <div>
                <Comments/>
            </div>
        );
    }
}

export { CommentsPage };
