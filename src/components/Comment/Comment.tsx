import { Component, ReactNode } from 'react';

import { IComment } from '../../interfaces';

interface IProps {
    children?: ReactNode
    comment: IComment
}
class Comment extends Component<IProps> {
    render() {
        const { id, body, name, email } = this.props.comment;
        return (
            <ul>
                <li>ID: {id}</li>
                <li>NAME: {name}</li>
                <li>EMAIL: {email}</li>
                <li>BODY: {body}</li>
            </ul>
        );
    }
}

export { Comment };
