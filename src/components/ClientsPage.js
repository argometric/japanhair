import React, { useState, useEffect } from "react";
import { getClients } from "../api/clientApi";
import ClientsList from "./ClientsList";

function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(_clients => setClients(_clients));
  }, []);

  return (
    <div className="container">
      <div className="title text-center">
        <h1>Clients</h1>
      </div>
      <ClientsList clients={clients} />
    </div>
  );
}

export default ClientsPage;
