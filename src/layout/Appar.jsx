import * as React from 'react';
import PropTypes from 'prop-types';
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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import logo from '../assets/image/logo.png';

import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { blue, pink, white } from '../color-main/color';

import Cookies from 'universal-cookie';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const navItems = [
  { label: 'public', path: '/', order: 1 },
  { label: 'about', path: '/about', order: 2 },
].sort((a, b) => a.order - b.order);

function DrawerAppBar(props) {
  const { window, toggleMode, mode } = props;

  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  const user = useSelector((state) => state.Log_in.user);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%' }}>
      <IconButton onClick={toggleMode} sx={{ mb: 2 }}>
        {mode === 'light' ? (
          <DarkModeOutlinedIcon sx={{ color: blue }} />
        ) : (
          <WbSunnyOutlinedIcon sx={{ color: pink }} />
        )}
      </IconButton>

      <Divider />

      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  color: isActive
                    ? theme.palette.primary.text
                    : 'rgba(113, 127, 166, 1)',
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}

        {/* Dashboard بالموبايل */}
        {token && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: theme.palette.primary.Appar,
          color: theme.palette.primary.text,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* LEFT */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: 'none' },
                color: theme.palette.primary.drawer,
              }}
            >
              <MenuIcon sx={{ color: theme.palette.primary.drawer }} />
            </IconButton>

            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                background: theme.palette.primary.logo,
                width: 52,
                height: 49,
                borderRadius: '8px',
              }}
            />

            {/* Dark mode */}
            <IconButton
              onClick={toggleMode}
              sx={{ color: 'white', width: 45, height: 56 }}
            >
              {mode === 'light' ? (
                <DarkModeOutlinedIcon sx={{ fontSize: 30, color: blue }} />
              ) : (
                <WbSunnyOutlinedIcon sx={{ fontSize: 30, color: pink }} />
              )}
            </IconButton>
          </Box>

          {/* CENTER */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 2,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive
                      ? theme.palette.primary.text
                      : 'rgba(113, 127, 166, 1)',
                  }}
                >
                  {item.label}
                </Button>
              );
            })}

            {/* Dashboard */}
            {token && (
              <Button
                component={Link}
                to="/dashboard"
                sx={{ color: theme.palette.primary.text }}
              >
                Dashboard
              </Button>
            )}
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {token ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src={user?.image}
                  alt={user?.firstName}
                  sx={{ width: 40, height: 40 }}
                />

                <Typography sx={{ fontSize: 12 }}>
                  {user?.firstName}
                </Typography>
              </Box>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: '143px',
                    height: '43px',
                    borderRadius: '12px',
                    bgcolor: theme.palette.primary.button,
                    color: white,
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  log-in
                </Button>
              </Link>
            )}
          </Box>

        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3, flexGrow: 1 }} />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default DrawerAppBar;