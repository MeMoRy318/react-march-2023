import React, { useEffect, useState } from 'react';

import { IPost } from '../interfaces';
import { postsService } from '../services';

interface IUseUserPosts {
    posts: IPost[]
    setPostId: (postId: string | number) => void
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}

const useUserPosts = (): IUseUserPosts => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [postId, setPostId] = useState<string | number>(0);

    useEffect(() => {
        if (postId) {
            postsService.getPostsByUsersId(postId).then(({ data }) => setPosts(data));
        }
    }, [postId]);

    return { posts, setPostId, setPosts };
};

export { useUserPosts };
