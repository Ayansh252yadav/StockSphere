import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import StockSphereLogo from "../assets/StockSphereLogo.svg";

const drawerWidth = 240;

const navItems = [
  { label: "Signup", path: "/signup" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Pricing", path: "/pricing" },
  { label: "Support", path: "/support" },
  {label :"Login" ,path: "/login"}
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        pt: 2,
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={StockSphereLogo}
          alt="StockSphere"
          style={{
            height: 70,
            cursor: "pointer",
          }}
        />
      </Link>

      <Divider sx={{ mt: 2 }} />

      {/* Mobile Menu */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #f0f0f0',
          color: '#444',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1200px',
            width: '100%',
            mx: 'auto',
            minHeight: '72px',
          }}
        >
          {/* Mobile Hamburger */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              color: '#444',
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img
                src={StockSphereLogo}
                alt="StockSphere"
                style={{
                  height: 55,
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: '#666',
                  fontSize: '15px',
                  fontWeight: 400,
                  textTransform: 'none',
                  mx: 1,
                  '&:hover': {
                    color: '#387ed1',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Desktop Hamburger */}
          
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;