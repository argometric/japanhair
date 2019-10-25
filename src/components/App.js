import React from 'react';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import AddShop from './pages/AddShop';
import NotFoundPage from './pages/NotFoundPage';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import BookPage from './pages/BookPage';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/shops' component={AddShop} />
                <Route path='/test' component={TestPage} />
                <Route path='/book' component={BookPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
};

export default App;
