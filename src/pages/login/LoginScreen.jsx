import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../api/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: 'url("https://www.soprasteria.be/images/librariesprovider2/sopra-steria-benelux-images/banner-inner-carousel-single-line-card-headquarters-(1560x515)/appviewx-header-1560-51531f68633e7fd6c36b458ff000034b0d9.png?sfvrsn=290beadc_0")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#c8c8c7',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
    marginRight:theme.spacing(8), 
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

    axios
      .post('http://localhost:8080/auth/signin', { email, password })
      .then((res) => {
        const token = res.data.token;
        const empId = res.data.empId;

        localStorage.setItem('token', token); // store token in local storage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set the default authorization header for all axios requests
        localStorage.setItem('empId', empId);
        navigate('/managerdashboard'); // navigate to the dashboard page
      })
      .catch((err) => setError(err.response.data.message));

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xs">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
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
              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default LoginScreen;
