import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ mensaje, tipo }) => {
  return (
    <BootstrapAlert variant={tipo}>
      {mensaje}
    </BootstrapAlert>
  );
};

export default Alert;