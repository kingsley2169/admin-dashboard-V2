import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface UserTableProps {
    data: {
      user: string;
      username: string;
      email: string;
      status: string;
    }[];
}

const AdminTable = ({ data }: UserTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className='adminTableHead'>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='bodyFonts'>{row.user}</TableCell>
              <TableCell className='bodyFonts'>{row.username}</TableCell>
              <TableCell className='bodyFonts'>{row.email}</TableCell>
              <TableCell>
                <Button variant="contained" color={row.status === 'Active' ? 'success' : 'error'} className='activeInactive'>
                  {row.status}
                </Button>
              </TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                  <EditIcon className='adminIconButton'/>
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon className='adminIconButton'/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
