import { Component, ReactNode } from 'react';

import { IComment } from '../../interfaces';
import { commentService } from '../../services';
import { Comment } from '../Comment/Comment';

interface IProps {
    children?: ReactNode
}
interface IMyState  {
    comments: IComment[]
}
class Comments extends Component<IProps, IMyState> {

    constructor(props:IProps) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    async componentDidMount():Promise<void> {
        const { data: comments } = await commentService.getAll();
        this.setState({ comments });
    }

    render() {
        const { comments } = this.state;

        return (
            <>
                {!!comments?.length && comments.map(value => <Comment comment={value} key={value.id}/>)}
            </>
        );
    }
}

export { Comments };
