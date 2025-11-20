import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { Code, LocalCafe, Javascript, Terminal, Home } from '@mui/icons-material';

const SidebarMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Python', icon: <Code />, path: '/python' },
    { text: 'Java', icon: <LocalCafe />, path: '/java' },
    { text: 'JavaScript', icon: <Javascript />, path: '/javascript' },
    { text: 'PHP', icon: <Terminal />, path: '/php' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          background: 'rgba(15, 15, 35, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <Box sx={{   overflowY: 'hidden',
                    overflowX: 'hidden', mt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleNavigate(item.path)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(5px)',
                  

                    transition: 'all 0.3s ease',
                  },
                  ...(location.pathname === item.path && {
                    backgroundColor: 'rgba(25, 118, 210, 0.2)',
                    boxShadow: '0 0 20px rgba(25, 118, 210, 0.5)',
                    borderLeft: '4px solid #1976d2',
                  }),
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === item.path ? '#1976d2' : '#fff',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: location.pathname === item.path ? '#1976d2' : '#fff',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SidebarMenu;
