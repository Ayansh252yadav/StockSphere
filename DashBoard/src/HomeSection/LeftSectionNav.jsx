import React, { useState,useEffect } from "react";
import logo from "../assets/StockSphereLogo.svg";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Orders", path: "/orders" },
  { name: "Positions", path: "/positions" },
  { name: "Holdings", path: "/holdings" },
  { name: "Funds", path: "/funds" },
  { name: "Apps", path: "/apps" },
];

const LeftSectionNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItems = (item) => {
    navigate(item.path);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [userName, setUserName] = useState("");

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/me",
        {
          withCredentials: true,
        }
      );

      setUserName(res.data.username);
      console.log(userName);
    } catch (err) {
      console.log(err);
    }
  };

  fetchUser();
}, []);
  return (

    
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box>
          <img
            src={logo}
            alt="StockSphere"
            style={{
              height: "40px",
              cursor: "pointer",
            }}
           onClick={() => window.location.href = "http://localhost:5173"}
          />
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.name}
              onClick={() => handleMenuItems(item)}
              sx={{
                cursor: "pointer",
                color:
                  location.pathname === item.path
                    ? "#ff6f00"
                    : "#666",
                fontWeight:
                  location.pathname === item.path
                    ? 600
                    : 400,
                paddingBottom: "6px",
              }}
            >
              {item.name}
            </Typography>
          ))}

          {/* Avatar */}
          <Avatar
            alt="User"
            sx={{
              width: 34,
              height: 34,
              cursor: "pointer",
              bgcolor: "#1976d2",
            }}
            onClick={handleProfileClick}
          >
              {userName?.charAt(0).toUpperCase()}
          </Avatar>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              Profile
            </MenuItem>

            <MenuItem onClick={handleClose}>
              Account
            </MenuItem>

            <MenuItem
              onClick={async () => {
    handleClose();
    try {
      await axios.post(
        "http://localhost:8080/logout",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Logout error:", err);
    }
    window.location.href = "http://localhost:5173/login";
  }}
>
  Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LeftSectionNav;