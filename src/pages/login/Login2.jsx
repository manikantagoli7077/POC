import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../api/api'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const LoginScreen = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic here

    axios.post('http://localhost:8080/auth/signin', { email, password })
      .then(res => {
        const token = res.data.token;
         const empId = res.data.empId;

        localStorage.setItem('token', token); // store token in local storage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set the default authorization header for all axios requests
        localStorage.setItem('empId',empId);
        // navigate('/employee/:empId', { state: { empId: empId } });
            // navigate to the dashboard page
            //  <Link to={"/employee/:empId" {state:{empId:empId}}}>
            navigate('/employee')
      })
      
      .catch(err => setError(err.response.data.message));

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <Container maxWidth="xs">
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          className={classes.textField}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          className={classes.textField}
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginScreen;