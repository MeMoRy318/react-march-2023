import React, { FC, ReactNode } from 'react';

import { useArray, useFetching } from '../../myCustomHook';
import { IPost } from '../../interfaces';
import { postService } from '../../services';

interface IProps {
    children?: ReactNode
}

const Posts: FC<IProps> = () => {

    const { data } = useFetching<IPost[]>(postService.getAll);

    const { value, add, remove } = useArray<IPost>(data ?? []);

    return (
        <div>
            <button onClick={() => remove(1)}>remove</button>
            <button onClick={() => add({ body: 'asd', title: 'qwe', userId: 1 })}>Add</button>
            {!!value?.length && JSON.stringify(value)}
        </div>
    );
};

export { Posts };
