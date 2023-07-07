import React, { FC } from 'react';

import { usePosts } from '../../myCustomHooks';
import { Post } from '../index';
import './Posts.css';

const Posts:FC = () => {

    const [ posts ] = usePosts();

    return (
        <div className="container">
            { !! posts?.length && posts.map( value => <Post post={ value } key={ value.id }/> )}
        </div>
    );
};

export { Posts };
