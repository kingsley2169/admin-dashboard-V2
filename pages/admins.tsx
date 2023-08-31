import React from 'react'
import AdminTable from './adminTable'
import { Container, Typography } from '@mui/material';

const users = [
  { user: 'User 1', username: 'username1', email: 'user1@example.com', status: 'Active' },
  { user: 'User 2', username: 'username2', email: 'user2@example.com', status: 'Inactive' },
  { user: 'User 3', username: 'username2', email: 'user3@example.com', status: 'Active' },
  { user: 'User 4', username: 'username2', email: 'user4@example.com', status: 'Active' },
  { user: 'User 5', username: 'username2', email: 'user5@example.com', status: 'Inactive' },
  { user: 'User 6', username: 'username2', email: 'user6@example.com', status: 'Active' },
  // Add more user data here
]; 

const admins = () => {
  return (
    <Container style={{backgroundColor: 'primary'}}>
       <Typography variant="h4" gutterBottom>
        User Table
      </Typography>
      <AdminTable data={users}/>
    </Container>
  )
}

export default admins