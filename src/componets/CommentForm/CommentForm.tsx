import React, { FC, ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { ICommentForm } from '../../interfaces';

interface IProps {
    children?: ReactNode
    register: UseFormRegister<ICommentForm>
    handleSubmit: UseFormHandleSubmit<ICommentForm>
    isValid: boolean
    submit: (dataForm:ICommentForm)=>Promise<void>
}

const CommentForm: FC<IProps> = ({
    register,
    handleSubmit,
    submit,
    isValid,
}) => {
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="number" placeholder="post id" {...register('postId')}/>
            </label>
            <br/>
            <label>
                <input type="text" placeholder="name" {...register('name')}/>
            </label>
            <br/>
            <label>
                <input type="text" placeholder="email" {...register('email')}/>
            </label>
            <br/>
            <label>
                <input type="text" placeholder="body" {...register('body')}/>
            </label>
            <br/>
            <button disabled={!isValid}> Create </button>
        </form>
    );
};

export { CommentForm };
