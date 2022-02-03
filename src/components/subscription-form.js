/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';

const SubscriptionForm = ({ text, buttonLabel, ...props }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id={`email-${id}`}
        placeholder ="Enter your email"
      />
      <Button  >{text}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      backgroundColor:  '#EC1D25',
      width: 'auto',
      border: '#EC1D25',

      // placeholder: {
      //   backgroundColor : "#EC1D25",

      // },
    
    },
    button: {
      ml: [3],
      backgroundColor:  '#EC1D25',

    },
  
    
  },
};
