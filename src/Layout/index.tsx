import React from 'react'

import Header from './Header';
import BackToTop from '../components/BackToTop';
import { ContextProvider } from '../components/store';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <ContextProvider>
                <Header />
                {children}
                {/* <BackToTop /> */}
            </ContextProvider>
        </>
    )
}

export default Layout;