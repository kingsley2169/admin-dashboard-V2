import React, { useState } from 'react'
import { Avatar, Box, Button, Container, CssBaseline, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography, styled } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star'; 
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TodayIcon from '@mui/icons-material/Today';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Props {
  
  window?: () => Window;
}

const Email = ( props: Props ) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [starredItems, setStarredItems] = useState(Array(5).fill(false)); 

  const toggleStar = (index: number) => {
    const newStarredItems = [...starredItems];
    newStarredItems[index] = !newStarredItems[index];
    setStarredItems(newStarredItems);
  };


  const emailList = (
    <div>
      <Divider/>
      <List>
        {['Inbox', 'Starred', 'Promotions', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <StarBorderOutlinedIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <CssBaseline/>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Box>
              <div className='composeButton'>
                <Button variant='contained' style={{backgroundColor:'#67349d'}}>Compose</Button>
              </div>
              <div>
                
                {emailList}
                
              </div>
            </Box>
          </Item>
        </Grid>


        <Grid item xs={9}>
          <Item>
            <Typography variant="h6">Email Content</Typography>
            <List>
              {Array.from({ length: 9 }).map((_, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemIcon>
                    {starredItems[index] ? (
                      <StarIcon
                        color="primary"
                        onClick={() => toggleStar(index)}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <StarBorderIcon
                        onClick={() => toggleStar(index)}
                        style={{ cursor: 'pointer' }}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary="User Name"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          Message text
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                  <ListItemIcon>
                    <TodayIcon color="action" /> {/* Display date icon */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Aug 16, 2023" // Replace with actual date
                    secondary=""
                  />
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Email