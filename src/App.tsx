import { FC } from 'react';

import { Posts } from './components';
import './App.css';

const App:FC = () => {

    return (
        <div className="content">
            <Posts/>
        </div>
    );
};

export { App };
