import { Box, Button, Container, keyframes, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import SocialIcons from './SocialIcons';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const Hero = () => {
  const theme = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [fading, setFading] = useState(false);

  const roles = [
    "Software Developer",
    "MERN Stack Developer",
    "Open Source Contributor"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFading(false);
      }, 500); // Match this with fadeOut duration
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParticleBackground />
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Hi, I'm Ashen Wishwa Geeth
        </Typography>
        
        <Box sx={{ 
          height: '60px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4
        }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{
              animation: `${fading ? fadeOut : fadeIn} 0.5s ease-in-out forwards`,
              position: 'absolute',
              background: 'linear-gradient(90deg, #ffffff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              fontWeight: 600,
              letterSpacing: '1px'
            }}
          >
            {roles[currentRole]}
          </Typography>
        </Box>
        
        <Typography variant="body1" sx={{ 
          maxWidth: '700px', 
          mx: 'auto', 
          mb: 4,
          fontSize: '1.1rem',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)'
        }}>
          Creating intuitive, user-friendly digital experiences across multiple platforms.
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 2, 
          mb: 4,
          '& .MuiButton-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }
          }
        }}>
          <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600
              }}
            >
              View My Work
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Contact Me
            </Button>
          </ScrollLink>
        </Box>
        
        <SocialIcons />
      </Container>
    </Box>
  );
};

export default Hero;