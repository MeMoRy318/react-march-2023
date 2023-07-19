import React, { FC, LegacyRef, ReactNode } from 'react';

import { IComment } from '../../interfaces';

interface IProps {
    children?: ReactNode
    comment: IComment
    isLastElement?: LegacyRef<HTMLDivElement>
}

const Comment: FC<IProps> = ({ comment, isLastElement }) => {

    const { body, email, name, id } = comment;

    return (
        <div ref={isLastElement}>

            <ul>
                <li><strong>ID:</strong> {id}</li>
                <li><strong>NAME:</strong> {name}</li>
                <li><strong>EMAIL:</strong> {email}</li>
                <li><strong>BODY:</strong> {body}</li>
            </ul>
        </div>
    );
};

export { Comment };
