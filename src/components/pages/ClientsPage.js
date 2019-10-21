import React, { useState, useEffect } from "react";
import { getClients } from "../../api/clientApi";
import ClientsList from "../others/ClientsList";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(_clients => setClients(_clients));
  }, []);

  return (
    <div className="container">
      <div className="title text-center">
        <h1>Add Location</h1>
      </div>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    </div>
  );
}

export default ClientsPage;
