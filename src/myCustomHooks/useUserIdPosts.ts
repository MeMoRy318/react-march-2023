import React, { useEffect, useState } from 'react';

import { IPost } from '../interfaces';
import { postsService } from '../services';

interface IUseUserIdPosts {
    posts: IPost[]
    setPostId: ( postId: number ) => void
    setPosts: React.Dispatch<React.SetStateAction<IPost[] | []>>
}

const useUserIdPosts = ( id: number = 0 ): IUseUserIdPosts => {

    const [ posts, setPosts ] = useState<IPost[]>( [] );
    const [ postId, setPostId ] = useState<number>( id );

    useEffect(() => {
        if ( postId ) {
            postsService.getPostsByUserId(postId).then(({ data }) => setPosts( data ));
        }
    }, [ postId ]);

    return { posts, setPostId, setPosts };
};

export { useUserIdPosts };
