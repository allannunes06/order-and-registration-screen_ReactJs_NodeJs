import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Orders from './containers/Orders';

export default function App() {

    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/orders" element={<Orders/>}></Route>

        </Routes>
        </Router>


    );
}



