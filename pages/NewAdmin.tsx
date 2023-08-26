import React from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const NewAdmin = () => {
  return (
    <Container maxWidth="lg"> {/* Adjusted maxWidth */}
      <CssBaseline />
      <Grid justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Create New Admin
            </Typography>
            <form>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Mobile Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="Role"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    >
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="super-admin">Super Admin</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              <Button variant="contained" color="primary" fullWidth>
                Create Admin
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewAdmin;
