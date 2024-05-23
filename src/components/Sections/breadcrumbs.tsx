"use client"
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid } from '@mui/material';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb({ title }: any) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      <Typography variant='subtitle2' color="textColor.brd">Home</Typography>
    </Link>,

    <Typography variant='subtitle2' key="2" color="textColor.brd"
      sx={{ fontWeight: '600' }}
    >
      {title}
    </Typography>,
  ];

  return (
    <Grid container mt={2}
    justifyContent={'center'}
    >
      <Grid container item xs={11.5}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: 'textColor.brd' }} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}
