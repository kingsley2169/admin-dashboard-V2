import { Container, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, ListItemSecondaryAction, Typography, Paper, Theme, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const customTheme = createTheme({
    spacing: 8, // Define the spacing value
});
  

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: customTheme.spacing(20), // Adjust the size as needed
      height: customTheme.spacing(20), // Adjust the size as needed
      borderRadius: 0, // Makes the avatar square
      marginRight: customTheme.spacing(5),
      '& img': {
        objectFit: 'cover', // Make the image fill the square avatar
        width: '100%', // Ensure the image occupies the full space
        height: '100%', // Ensure the image occupies the full space
      },
    },
    listItem: {
        cursor: 'pointer', // Change cursor to pointer on hover
    },
}));

const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "This is the content of Blog Post 1.",
    imageUrl: "https://placeimg.com/100/100/nature",
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "This is the content of Blog Post 2.",
    imageUrl: "https://placeimg.com/100/100/architecture",
  },
  {
    id: 3,
    title: "Blog Post 3",
    content: "This is the content of Blog Post 3.",
    imageUrl: "https://placeimg.com/100/100/architecture",
  },
  {
    id: 4,
    title: "Blog Post 4",
    content: "This is the content of Blog Post 4.",
    imageUrl: "https://placeimg.com/100/100/architecture",
  },
  {
    id: 5,
    title: "Blog Post 5",
    content: "This is the content of Blog Post 5.",
    imageUrl: "https://placeimg.com/100/100/architecture",
  },
  
];

const EditPost = () => {
    const classes = useStyles();
  return (
    <Container>
      <List>
        {blogPosts.map((post) => (
          <Paper elevation={3} key={post.id} style={{ marginBottom: '1rem' }}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar alt={post.title} src={post.imageUrl} className={classes.avatar}/>
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={post.content}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
}

export default EditPost;
