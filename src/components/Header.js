import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
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
                aria-label="open mobile menu"
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
          '& .MuiDrawer-paper': {
            width: 260,
            backgroundColor: 'rgba(25, 25, 25, 0.98)',
            color: '#fff',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton color="inherit" aria-label="close mobile menu" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleDrawerToggle}
                style={{ width: '100%' }}
              >
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ScrollLink>
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 2, pt: 1 }}>
          <SocialIcons />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;