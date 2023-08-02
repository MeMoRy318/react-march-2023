import { Component, ReactNode } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    children?: ReactNode
    post: IPost
}
class Post extends Component<IProps> {
    render() {
        const { id, title, body } = this.props.post;

        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: <strong>{title}</strong></li>
                <li>BODY: {body}</li>
            </ul>
        );
    }
}

export { Post };
