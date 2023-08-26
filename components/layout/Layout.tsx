import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PersistentDrawerLeft from './Sidebar';
import Navbar from './Navbar';
import { Typography } from '@mui/material';

interface LayoutProps {
    children: React.ReactNode; // This allows you to pass the content as a child
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
        setOpen(true);
  };

  const handleDrawerClose = () => {
        setOpen(false);
  };

  return (
    <Box sx={{ display: 'block' }}>
        <CssBaseline />
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
        <PersistentDrawerLeft open={open} handleDrawerClose={handleDrawerClose} />
        <main style={{ flexGrow: 1, paddingTop: '20px', paddingLeft: open ? '300px' : '0' }}>
            {children}
        </main>
    </Box>
  );
}
