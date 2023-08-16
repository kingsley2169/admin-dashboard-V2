import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    onClick={handleDrawerOpen}
                    edge='start'
                    sx={{ mr: 2, ...(open && {display: 'none'}) }}>

                </IconButton>
                <Typography variant='h6' noWrap component="div">
                    Persistent Drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;