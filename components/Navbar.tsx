import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Typography,
  InputBase,
  InputAdornment,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search, BusinessCenter, Notifications, HelpOutline, Menu, Close } from "@mui/icons-material";

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <>
      <IconButton
        color="inherit"
        edge="end"
        sx={{ alignSelf: "flex-end", marginBottom: 1 }}
        onClick={toggleDrawer(false)}
      >
        <Close />
      </IconButton>
      {isMobile && searchOpen && (
        <ListItem>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
              paddingRight: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
              width: "100%",
              backgroundColor: (theme) => theme.palette.common.white,
              borderRadius: (theme) => theme.shape.borderRadius,
            }}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
        </ListItem>
      )}
       <ListItem>
        <IconButton color="inherit">
          <Avatar alt="User Image" src="/static/images/avatar/1.jpg" />
        </IconButton>
        <Divider />
      </ListItem>
      <ListItem>
        <IconButton color="inherit" onClick={handleSearchClick}>
          <Search />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <BusinessCenter />
          </Badge>
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem>
        <IconButton color="inherit">
          <Badge badgeContent={7} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem>
        <IconButton color="inherit">
          <HelpOutline />
        </IconButton>
      </ListItem>
    </>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap>
          Logo
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ width: "80%" }}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <>
            {searchOpen && (
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
                  paddingRight: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
                  transition: (theme) => theme.transitions.create("width"),
                  width: "50%",
                  backgroundColor: (theme) => theme.palette.common.white,
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            )}
            <div>
              <IconButton edge="end" color="inherit" aria-label="search" onClick={handleSearchClick}>
                <Search />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <BusinessCenter />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
              <Badge badgeContent={7} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <HelpOutline />
              </IconButton>
              <IconButton color="inherit">
                <Avatar alt="User Image" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

