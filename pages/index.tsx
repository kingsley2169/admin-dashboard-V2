import React, { Fragment } from 'react';
import { Box, Card, CardContent, Container, Grid, Typography, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    image: "image URL",
    type: 'image',
    name: 'Cheese Burger',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Burgers'
  },
  {
    id: 2,
    image: "image URL",
    name: 'Diet Coke',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Driks'
  },
  {
    id: 3,
    image: "image URL",
    name: 'Diet Coke',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Driks'
  },
  {
    id: 4,
    image: "image URL",
    name: 'Diet Coke',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Driks'
  },
  {
    id: 5,
    image: "image URL",
    name: 'Diet Coke',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Driks'
  },{
    id: 6,
    image: "image URL",
    name: 'Diet Coke',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Driks'
  },
  {
    id: 7,
    image: "image URL",
    name: 'Diet Coke',
    price: 10_000,
    menu: 'Daily Menu',
    category: 'Driks'
  },

];

const cardItem = (
  <Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  </Fragment>
);

const index = () => {
  return (
    <Container className='indexCardsContainer' >
      {/* Box Containing the grids with card items */}
      <Box sx={{paddingBottom: '40px'}}>
        <Grid container direction="row" justifyContent="space-between" className='gridContainer' alignItems="flex-start" gridTemplateColumns={'repeat(4, 1fr)'} columnGap={'3'}>
          <Grid item >
            <Card className='cardItem'>{cardItem}</Card>
          </Grid>
          <Grid item >
            <Card className='cardItem'>{cardItem}</Card>
          </Grid>
          <Grid item >
            <Card className='cardItem'>{cardItem}</Card>
          </Grid>
          <Grid item >
            <Card className='cardItem'>{cardItem}</Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{paddingBottom: '40px'}}>
        <Grid container direction="row" justifyContent="space-between" className='gridContainer' alignItems="flex-start" gridTemplateColumns={'repeat(3, 1fr)'} columnGap={'3'}>
          <Grid item >
            <Card className='statsItem'>{cardItem}</Card>
          </Grid>
          <Grid item >
            <Card className='statsItem'>{cardItem}</Card>
          </Grid>
          <Grid item >
            <Card className='statsItem'>{cardItem}</Card>
          </Grid>
          
        </Grid>
      </Box>
        
      <Box sx={{paddingBottom: '40px'}}>
        <Grid container direction="row" justifyContent="space-between" className='gridContainer' alignItems="flex-start" gridTemplateColumns={'repeat(2, 1fr)'} columnGap={'1'}>
          <Grid xs={12} md={6}>
            <Card className='usersItem'>
              <DataGrid
                rows={rows}
                columns={columns}
                
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card className='usersItem'>
              <DataGrid
                rows={rows}
                columns={columns}
                
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Card>
          </Grid>

        </Grid>
      </Box>
      
   
      
    </Container>
  )
}

export default index;