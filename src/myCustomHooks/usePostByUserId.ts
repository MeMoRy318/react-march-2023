import React, { useEffect, useState } from 'react';

import { IPost } from '../interfaces';
import { postService } from '../services';

interface IUsePostByUserId {
    posts: IPost[]
    setUserId: React.Dispatch<React.SetStateAction<number>>
}
const usePostByUserId = ( id: number = 0 ): IUsePostByUserId => {

    const [posts, setPosts] = useState<IPost[]>( [] );
    const [userId, setUserId] = useState<number>( id );

    useEffect(() => {
        if (userId) {
            postService.getPostsByUserId( userId ).then(({ data }) => setPosts( data ) );
        }
    }, [userId]);

    return { posts, setUserId };
};

export { usePostByUserId };
