import { Route, Routes } from 'react-router-dom';

import { MyLayout } from './layout/MyLayout';

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MyLayout/>}>

            </Route>
        </Routes>
    );
};

export { App };
