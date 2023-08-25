import { useLocation, Location } from 'react-router-dom';

interface IState<S> extends Location {
    state:S
}

const useAppLocation = <S>():IState<S> => useLocation();

export { useAppLocation };
