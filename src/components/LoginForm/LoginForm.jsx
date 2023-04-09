import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logInUser } from 'redux/auth/auth-operations';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { selectIsRefresh } from 'redux/auth/auth-selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  const handleSubmit = e => {
    e.preventDefault();
    const password = e.currentTarget.elements.password.value;
    const email = e.currentTarget.elements.email.value;
    dispatch(logInUser({ email, password }));
    e.currentTarget.reset();
    <Navigate to="/contacts" />;
  };

  return isRefresh ? (
    'Refresh contacts...'
  ) : (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
