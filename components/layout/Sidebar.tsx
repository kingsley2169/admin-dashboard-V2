import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Divider, Drawer, IconButton, styled, useTheme } from '@mui/material';
import React from 'react';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

const drawerWidth = 240;

const Sidebar = () => {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Drawer
            sx = {{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper':{
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>
            </DrawerHeader>

            <Divider/>

        </Drawer>
    )
}

export default Sidebar