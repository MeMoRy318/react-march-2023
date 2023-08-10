import React, { FC, ReactNode } from 'react';

import { IComment } from '../../interfaces';

interface IProps {
    children?: ReactNode
    comment: IComment
}

const Comment: FC<IProps> = ({ comment }) => {
    const { name, body, email } = comment;
    return (
        <ul>
            <li><strong>NAME:</strong> {name}</li>
            <li><strong>BODY:</strong> {body}</li>
            <li><strong>EMAIL:</strong> {email}</li>
        </ul>
    );
};

export { Comment };
