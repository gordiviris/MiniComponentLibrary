import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box size="large">
      <Text size="large" color="red">Text Component</Text>
      <Button color="grey" onClick={handleClick}>Click Here</Button>
    </Box>
  );
};

export default MyAwesomeComponent;