import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronRight from '@mui/icons-material/ChevronRight';
import NextLink from 'next/link';  // Import Link component from your router library
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

const drawerWidth = 300;

const DrawerContainer = styled('div')(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: '#fff',
  color: '#fff',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
}));

const menuItems = [
  { text: 'Home', icon: <InboxIcon />, route: '/' },
  { text: 'Emails', icon: <MailIcon />, route: '/E-mail' },
  { text: 'Admins', icon: <AdminPanelSettingsOutlinedIcon />, route: '/admins' },
  { text: 'Edit Posts', icon: <EditOutlinedIcon/>, route: '/EditPost'},
  { text: 'Add New Admin', icon: <AccessibilityNewOutlinedIcon/>, route: '/NewAdmin'},
  { text: 'Add New Post', icon: <PostAddOutlinedIcon/>, route: '/content'},
  // Add more menu items with icons and routes here
];

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const HoverableListItem = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Sidebar: React.FC<SidebarProps> =({ open, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <DrawerContainer>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <NextLink key={item.text} href={item.route}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NextLink>
          ))}
        </List>
        <Divider />
      </Drawer>
    </DrawerContainer>
  );
}
export default Sidebar;

