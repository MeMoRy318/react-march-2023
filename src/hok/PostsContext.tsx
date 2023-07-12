import React, { createContext, FC, ReactNode } from 'react';

import { IUsePostByUserId, usePostByUserId } from '../myCustomHooks';

const defaultValue:IUsePostByUserId = {
    posts: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUserId: () => {},
};

const PostsContext:React.Context<IUsePostByUserId> = createContext<IUsePostByUserId>( defaultValue );

interface IPops {
    children: ReactNode
}
const PostsContextTsx:FC<IPops> = ({ children }) => {
    const iUsePostByUserId = usePostByUserId();
    return (
        <PostsContext.Provider value={ iUsePostByUserId }>
            { children }
        </PostsContext.Provider>
    );
};

export { PostsContextTsx, PostsContext };
