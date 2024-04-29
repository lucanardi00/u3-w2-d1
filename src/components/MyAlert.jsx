import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const MyAlert = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <Alert variant="success" onClose={handleClose} dismissible>
      <Alert.Heading>Welcome in EpicStore!</Alert.Heading>
      <p>
        You can close this alert message by pressing the top right corner "X" button!
      </p>
      <hr />
      <p className="mb-0">
        Have fun don't buy anything!
      </p>
    </Alert>
  );
}

export default MyAlert;
