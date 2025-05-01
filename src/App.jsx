import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Layout from './Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;