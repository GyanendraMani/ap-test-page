"use client";
import * as React from 'react';
import { Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import data from '@/components/data/headerData.json';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from './mobile-nav';

const Header = () => {
  return (
    <>
      <Grid container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "primary.main",
          py: { xs: 1 },
          display: {xs: 'none', md: 'flex'}
        }}
      >
        <Grid container item
          justifyContent={"space-between"}
          display={'flex'}
          xs={10} md={11.5}
        >
          <Grid container
            xs={10} md={8} lg={6} xl={5}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            <Avatar alt="Acharya Prasant"
              src="https://acharyaprashant.org/images/ic_favicon.png"
              sx={{ width: 35, height: 35 }}
            />
            {data.map((menuCols, index) => {
              return (
                <Grid item key={index}>
                  <Typography variant="button"
                    sx={{
                      textTransform: 'capitalize'
                    }}
                    color={'text.secondary'}>
                    {menuCols.title}
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
          <Grid container item
            xs={10} md={4} lg={5}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <MenuIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 34 }} />
            <Typography color={'text.secondary'}>Menu</Typography>
          </Grid>
        </Grid>

      </Grid>
      <Grid container
      sx={{
        display: {xs: 'flex', md: 'none'}
      }}
      >
        <MobileNav data={data} />
      </Grid>

    </>
  );
}

export default Header;
