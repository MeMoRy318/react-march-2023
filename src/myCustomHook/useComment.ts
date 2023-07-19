import { useEffect, useState } from 'react';

import { IComment } from '../interfaces';
import { commentService } from '../services';

interface IUseComment {
    isLoading: boolean
    comments: IComment[]
    error: string
}
const useComment = (deps?:unknown): IUseComment => {

    const [comments, setComments] = useState<IComment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        commentService.getAllComment()
            .then(({ data }) => setComments(data))
            .catch((e: Error) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, [deps]);

    return { comments, isLoading, error };

};

export { useComment };
