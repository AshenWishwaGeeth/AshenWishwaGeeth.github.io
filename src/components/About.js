import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar, Box, Chip, Container, Divider, Grid, Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  const theme = useTheme();

  const education = [
    {
      degree: 'BSc (Hons) Computer Science',
      institution: 'University of Wolverhampton',
      year: '2025-2026',
      icon: <SchoolIcon color="primary" />
    },
    {
      degree: 'Higher National Diploma in Software Engineering',
      institution: 'National Institute of Business Management',
      year: '2023-2024',
      icon: <SchoolIcon color="primary" />,
      gpa: 'GPA: 3.8'
    },
    {
      degree: 'Diploma in Software Engineering',
      institution: 'National Institute of Business Management',
      year: '2022-2023',
      icon: <SchoolIcon color="primary" />,
      gpa: 'GPA: 3.87'
    }
  ];

  const contactInfo = [
    { icon: <PhoneIcon color="primary" />, label: '+94714318899' },
    { icon: <EmailIcon color="primary" />, label: 'ashenwishwageeth@gmail.com' },
    { icon: <LocationOnIcon color="primary" />, label: 'Colombo, Sri Lanka' }
  ];

  return (
    <Box 
      id="about" 
      sx={{ 
        py: 12, 
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, transparent 100%)`,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 8,
              fontWeight: 700,
              color: theme.palette.text.primary,
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                background: theme.palette.primary.main,
                margin: '20px auto 0',
                borderRadius: '2px'
              }
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Avatar
                alt="Ashen Wishwa Geeth"
                src="/assets/ashen.jpg"
                sx={{
                  width: 280,
                  height: 280,
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 8px 24px ${theme.palette.primary.light}40`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 5, 
                  borderRadius: '16px',
                  background: theme.palette.background.paper,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                  Software Developer | Web & Mobile Specialist
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                  A highly motivated Computer Science student with a strong foundation in software
                  development, web technologies, and mobile applications. Proficient in designing and
                  developing intuitive, user-friendly digital experiences across multiple platforms.
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8 }}>
                  Skilled in object-oriented programming, database management, and hardware integration.
                  Adept at problem-solving, with strong communication, leadership, teamwork, time
                  management, and adaptability skills.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Grid container spacing={4}> {/* Increased spacing between columns */}
                  <Grid item xs={12} md={4}> {/* Reduced Contact column width */}
                    <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      Contact
                    </Typography>
                    {contactInfo.map((info, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ 
                          bgcolor: `${theme.palette.primary.main}20`, 
                          color: theme.palette.primary.main,
                          mr: 2,
                          width: 36,
                          height: 36
                        }}>
                          {info.icon}
                        </Avatar>
                        <Typography variant="body1">{info.label}</Typography>
                      </Box>
                    ))}
                  </Grid>

                  <Grid item xs={20} md={8}> {/* Increased Education column width */}
                    <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      Education
                    </Typography>
                    {education.map((edu, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ 
                            bgcolor: `${theme.palette.primary.main}20`, 
                            color: theme.palette.primary.main,
                            mr: 2,
                            width: 36,
                            height: 36
                          }}>
                            {edu.icon}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                              {edu.degree}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {edu.institution}
                            </Typography>
                          </Box>
                          <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                            <Typography variant="caption" display="block">
                              {edu.year}
                            </Typography>
                            {edu.gpa && (
                              <Chip
                                label={edu.gpa}
                                size="small"
                                sx={{
                                  backgroundColor: theme.palette.success.light,
                                  color: theme.palette.success.contrastText,
                                  fontWeight: 500,
                                  height: 20,
                                  mt: 0.5
                                }}
                              />
                            )}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;