import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import React from 'react';
import Main from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/dev/:id" component={Main}/>
        </BrowserRouter>
    );
}