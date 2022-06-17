import React from 'react';
import { Dashboard, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard></Dashboard>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
