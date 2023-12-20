// Sidebar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SideBar = ({ isOpen, onToggle }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => onToggle(false)}
      onMouseOver={() => onToggle(true)}
      onMouseOut={() => onToggle(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Menu Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
        {/* Add more menu items as needed */}
      </List>
    </Drawer>
  );
};

export default SideBar;
