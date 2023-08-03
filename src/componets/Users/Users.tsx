import React, { FC, ReactNode } from 'react';

import { useFetching } from '../../myCustomHook';
import { IUser } from '../../interfaces';
import { usersService } from '../../services';

interface IProps {
    children?: ReactNode
}

const Users: FC<IProps> = () => {

    const { data } = useFetching<IUser[]>(usersService.getAllUsers);

    return (
        <div>
            {!!data?.length && JSON.stringify(data)}
        </div>
    );
};

export { Users };
