import React, { FC, ReactNode, useMemo, useState } from 'react';

import { ICast } from '../../interfaces';
import { splitArrayIntoChunks } from '../../utility/slider';
import { PosterPreview } from '../PosterPreview/PosterPreview';

interface IProps {
    children?: ReactNode
    cast: ICast[]
}

const PostersPreview: FC<IProps> = ({ cast }) => {

    const [count, setCount] = useState<number>(1);

    const { chunk, totalCount } = useMemo(() => {
        return  splitArrayIntoChunks<ICast>(cast, count);
    }, [count]);

    return (
        <div>
            {
                chunk.map(item => <PosterPreview cast={item} key={item.id}/>)
            }
        </div>
    );
};

export { PostersPreview };
