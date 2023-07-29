import React, { FC, ReactNode } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import styles from './UserInfo.module.css';
interface IProps {
    children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
    return (
        <div>
            <div className={styles.userInfo}><FaUserAlt/></div>
            {/*<div>asd</div>*/}
        </div>
    );
};

export { UserInfo };
