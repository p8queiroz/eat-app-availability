import { Button } from '@material-ui/core';
import React from 'react';

const AvailableTimeTable: React.FC = () => {
    return (
     <>
      <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
    </>);
  };

  export default AvailableTimeTable;
