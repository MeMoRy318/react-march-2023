import { CarContextTSX } from './hok';
import { Cars } from './components';
import { PageCarForm } from './pages';

const App = () => {

    return (
        <CarContextTSX>
            <PageCarForm/>
            <Cars/>
        </CarContextTSX>
    );
};

export { App };
