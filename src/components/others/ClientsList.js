import React from "react";
import PropTypes from "prop-types";

const ClientList = props => {
  return (
    <table className="table text-light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Phone-nr</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {props.clients.map(client => {
          return (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.gender}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ClientList.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ClientList;
