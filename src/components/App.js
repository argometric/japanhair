import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import ClientsPage from './ClientsPage';

const App = () => {
    const getPage = () => {
        const route = window.location.pathname;
        if (route === '/about') return <AboutPage />;
        if (route === '/clients') return <ClientsPage />;
        return <HomePage />;
    };
    return (
        <div className='container-fluid'>
            <Header />
            {getPage()}
        </div>
    );
};

export default App;
