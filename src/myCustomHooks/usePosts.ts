import React, { useEffect, useState } from 'react';

import { IPost } from '../interfaces';
import { postService } from '../services';

type ISetPostsFunction = React.Dispatch<React.SetStateAction<IPost[]>>;

const usePosts = (): [ IPost[], ISetPostsFunction ] => {
    const [posts, setPosts] = useState<IPost[]>([] );

    useEffect(() => {
        postService.getAllPosts().then(({ data }: { data: IPost[] }) => setPosts(data));
    }, []);

    return [ [...posts], setPosts ];
};

export { usePosts };
