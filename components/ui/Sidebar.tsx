import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InboxIcon from '@mui/icons-material/Inbox';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box
          sx={{
            padding: '5px 10px'
          }}
        >
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <MailOutlineIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <MailOutlineIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
