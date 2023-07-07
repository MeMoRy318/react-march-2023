import React, { FC, ReactNode, useState } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    post: IPost
    children?: ReactNode
}
const Post:FC<IProps> = ({ post }) => {

    const { id, body, title } = post;
    const [ boolean, setBoolean  ] = useState<boolean>(false );

    return (
        <div style={{ width: '40%', textAlign: 'center', border: '1px solid black', padding: '5px' }}>
            <h2> ID: { id } </h2>
            <p> <strong>TITLE</strong>: { title } </p>
            <button onClick={() => setBoolean( !boolean )}>{ boolean ? 'close' : 'show' }</button>
            { boolean && <p>{ body }</p> }
        </div>
    );
};

export { Post };
