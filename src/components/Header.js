import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import SocialIcons from './SocialIcons';


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 280, height: '100%', bgcolor: '#0f1115', color: '#f5f7fa' }}
    >
      <Box sx={{ px: 3, py: 2.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Navigation
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
      <List sx={{ py: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ width: '100%' }}
            >
              <ListItemButton sx={{ py: 1.2, px: 3 }}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ fontSize: '1rem', fontWeight: 600 }}
                />
              </ListItemButton>
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" sx={{ backgroundColor: 'rgba(25, 25, 25, 0.9)', backdropFilter: 'blur(10px)' }}>
          <Container maxWidth="lg">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                Ashen Wishwa Geeth Jayarathna
              </Typography>
              
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Button color="inherit" sx={{ mx: 1 }}>
                      {item.name}
                    </Button>
                  </ScrollLink>
                ))}
                <SocialIcons />
              </Box>
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;