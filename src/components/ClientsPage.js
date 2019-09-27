import React, { useState, useEffect } from 'react';
import { getClients } from '../api/clientApi';
import ClientsList from './ClientsList';

function ClientsPage() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients().then(_clients => setClients(_clients));
    }, []);

    return (
        <>
            <h2>Clients</h2>
            <ClientsList clients={clients} />
        </>
    );
}

export default ClientsPage;
