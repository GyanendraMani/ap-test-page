"use client"
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';

// Drawer elements
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const MobileNav = ({ data }: any) => {
  const [open, setOpen] = useState(null);

  const toggleDrawer = (open: any) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <AppBar position="static"
      sx={{ boxShadow: 'none' }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container
            sx={{ flexGrow: 1 }}
          >
            <Avatar alt="Acharya Prasant"
              src="https://acharyaprashant.org/images/ic_favicon.png"
              sx={{ width: 35, height: 35, }}
            />
          </Grid>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={open ? open : false}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "primary.main",
              }}
            >
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                {data.map((menu:any) => (
                  <ListItemButton sx={{ width: "90vw", color: "text.secondary" }}>
                    <ListItemText primary={menu.title} />
                  </ListItemButton>
                ))}
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MobileNav;
