import React, { Fragment } from 'react';
import { Avatar, Box, Card, CardContent, Container, Grid, LinearProgress, Paper, Theme, Typography, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import dynamic from 'next/dynamic';
const BarChart = dynamic(() => import('@mui/x-charts/BarChart').then(mod => mod.BarChart), {
  ssr: false
});

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    border: `1px solid ${theme.palette.info.main}`,
  }
}));


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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const cardItem = (
  
  <Fragment>
    <CardContent>
      <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography className='appDetailsCardHeader'>BUDGET</Typography>
        <Typography className='appDetailsCardBodyBold'><b>$24k</b></Typography>
        <div style={{display:'flex', margin: '0'}}>
          <ArrowUpwardIcon style={{color: 'green', fontSize: '15px'}}/>
          <Typography className='appDetailsCardFooter'><span style={{color: 'green'}}>12% </span> INCREASE</Typography>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Avatar className='useStyle.Avatar' style={{backgroundColor: '#5F9EA0'}}>
          <AccountBalanceWalletOutlinedIcon/>
        </Avatar>
      </Grid>
      </Grid>
    </CardContent>
  </Fragment>
);

const cardItem2 = (
  <Fragment>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography className='appDetailsCardHeader'>TOTAL CUSTOMERS</Typography>
          <Typography className='appDetailsCardBodyBold'><b>1.6k</b></Typography>
          <div style={{display:'flex', margin: '0'}}>
            <ArrowDownwardIcon style={{color: 'red', fontSize: '15px'}}/>
            <Typography className='appDetailsCardFooter'><span style={{color: 'red'}}>16%</span> DECREASE</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Avatar className='useStyle.Avatar' style={{backgroundColor: '#5F9EA0'}}>
            <GroupsOutlinedIcon/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Fragment>
);

const cardItem3 = (
  
  <Fragment>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography className='appDetailsCardHeader'>TASKS PROGRESS</Typography>
          <Typography className='appDetailsCardBodyBold'><b>70%</b></Typography>
          <LinearProgress variant='determinate' value={70} />
        </Grid>
        <Grid item xs={4}>
          <Avatar className='useStyle.Avatar' style={{backgroundColor: '#5F9EA0'}}>
            <ListOutlinedIcon/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Fragment>
);

const cardItem4 = (
  
  <Fragment>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography className='appDetailsCardHeader'>TOTAL PROFIT</Typography>
          <Typography className='appDetailsCardBodyBold'><b>$15k</b></Typography>
        </Grid>
        <Grid item xs={4}>
          <Avatar className='useStyle.Avatar' style={{backgroundColor: '#5F9EA0'}}>
            <AttachMoneyOutlinedIcon/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Fragment>
);

const chartData = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 9800 },
  { label: 'Group E', value: 3908 },
  { label: 'Group F', value: 4800 },
];

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
            <Card className='cardItem'>{cardItem2}</Card>
          </Grid>
          <Grid item >
            <Card className='cardItem'>{cardItem3}</Card>
          </Grid>
          <Grid item >
            <Card className='cardItem'>{cardItem4}</Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{paddingBottom: '40px'}}>
        <Grid container direction="row" justifyContent="space-between" className='gridContainer' alignItems="flex-start" gridTemplateColumns={'repeat(2, 1fr)'} columnGap={'1'} spacing={2}>
          <Grid item xs={8} style={{paddingLeft:'0'}}>
            <Card className='statsItem'>
              <Typography className='indexBarChartHeader'>Impressions</Typography>
              <BarChart
                series={[
                  { data: [3, 4, 1, 6, 5], stack: 'A', label: 'series A1' },
                  { data: [4, 3, 1, 5, 8], stack: 'A', label: 'series A2' },
                  { data: [4, 2, 5, 4, 1], stack: 'B', label: 'series B1' },
                  { data: [2, 8, 1, 3, 1], stack: 'B', label: 'series B2' },
                  { data: [10, 6, 5, 8, 9], label: 'series C1' },
                ]}
                width={600}
                height={350}
              />
            </Card>
          </Grid>
          <Grid item xs={4} style={{paddingRight: '0'}}>
            <Card className='statsItem'>
              <Typography className='indexBarChartHeader'>Statistics</Typography>
            </Card>
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