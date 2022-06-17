import React from 'react';
import { Dashboard } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard></Dashboard>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
