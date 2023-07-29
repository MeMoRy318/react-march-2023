import React, { FC, ReactNode, useState } from 'react';

import styles from './ToggleSwitch.module.css';

interface IProps {
    children?:ReactNode
}
const ToggleSwitch:FC<IProps> = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div>
            <label className={styles.switch}>
                <input type="checkbox" checked={isOn} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export { ToggleSwitch };
