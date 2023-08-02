import { Component, ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../components';

interface IProps {
    children?: ReactNode
}
class Layout extends Component<IProps> {

    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
            </div>
        );
    }
}

export { Layout };
