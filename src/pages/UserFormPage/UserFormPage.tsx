import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';

import { UserForm } from '../../componets';
import { IUserForm } from '../../interfaces';
import { userSchema } from '../../validators';
import { userService } from '../../services/userService';

interface IProps {
    children?: ReactNode
}

const UserFormPage: FC<IProps> = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<IUserForm>({ mode: 'onChange', resolver: joiResolver(userSchema) });


    const submit = async (dataForm:IUserForm):Promise<void> => {
        const { data } = await userService.createUsers(dataForm);
        console.log(data);
        reset();
    };


    return (
        <div>
            <UserForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                isValid={isValid}
                submit={submit}
            />
        </div>
    );
};

export { UserFormPage };
