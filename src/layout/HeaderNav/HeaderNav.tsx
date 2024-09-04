import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ElectricBoltIconIcon from "@mui/icons-material/ElectricBolt";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <ElectricBoltIconIcon
          sx={{ display: { xs: "none", md: "flex" }, ml: 1 }}
        />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink
                to={`/`}
                style={({ isActive }) => ({
                  textAlign: "center",
                  textDecoration: "none",
                  color: isActive ? "primary.main" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                <Typography textAlign="center">Home</Typography>
              </NavLink>
            </MenuItem>
          </Menu>
        </Box>
        <ElectricBoltIconIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        />
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            component={({ children, ...props }) => (
              <NavLink
                {...props}
                to={`/`}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "primary.main" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {children}
              </NavLink>
            )}
            to="/"
            sx={{
              my: 2,
              display: "block",
            }}
          >
            Home
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNav;
