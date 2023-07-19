import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';

import { CommentForm } from '../../componets';
import { ICommentForm } from '../../interfaces';
import { commentService } from '../../services';
import { schemaComment } from '../../validators';

interface IProps {
    children?: ReactNode
}

const CommentFormPage: FC<IProps> = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { isValid },
    } = useForm<ICommentForm>({ mode: 'onChange', resolver: joiResolver(schemaComment) });

    const submit = async (dataForm:ICommentForm): Promise<void> => {
        const { data } = await commentService.createComment(dataForm);
        console.log(data);
        reset();
    };

    return (
        <div>
            <CommentForm
                register={register}
                handleSubmit={handleSubmit}
                isValid={isValid}
                submit={submit}
            />
        </div>
    );
};

export { CommentFormPage };
