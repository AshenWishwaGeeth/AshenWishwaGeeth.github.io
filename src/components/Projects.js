import { Box, Card, CardContent, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: 'Blood Donation Mobile App',
    description:
      'Simplifies the donation process and boosts community engagement with easy account creation, profile management, and secure communication. It provides a seamless, responsive user experience while safeguarding data.',
    technologies: ['Flutter', 'Firebase'],
    link: 'https://github.com/AshenWishwaGeeth/Blood-Donation-app---FLUTTER',
  },
  {
    title: 'Online Doctor Schedule System',
    description:
      'Doctors can efficiently manage schedules, view patient lists, and update profiles, while patients can find doctors, book appointments, and manage their profiles. The app ensures a smooth user experience, streamlining healthcare connections.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'CSS'],
    link: 'https://github.com/AshenWishwaGeeth/-Online-Doctor-Schedule-App',
  },
  {
    title: 'Credit Management Mobile App',
    description:
      'The Credit Management Mobile App helps shopkeepers manage customers, products, and credit sales efficiently. Built with Expo, React Native, and TypeScript, it allows users to record credit transactions, track balances, manage inventory, and view credit activity through a simple dashboard.',
    technologies: ['Expo', 'React Native', 'TypeScript', 'SQLite'],
    link: 'https://github.com/AshenWishwaGeeth/credit-management-mobile',
  },
  {
    title: 'Medical Appointment System with QR',
    description:
      'Developed a Medical Appointment System with QR using Java and MySQL in Eclipse IDE. Integrates QR codes for appointment scheduling, Java Swing for UI, JDBC for database connectivity, and PDF generation for appointment details.',
    technologies: ['Java', 'MySQL', 'Java Swing', 'JDBC', 'Eclipse IDE'],
    link: 'https://github.com/AshenWishwaGeeth/Medical-Appointment-System-with-QR',
  },
  {
    title: 'Role-Based Authentication System',
    description:
      'A full-stack role-based authentication system using Go (Gin), React, and Supabase (PostgreSQL). Supports secure user registration, JWT login, and role-based access for Admin and User dashboards.',
    technologies: ['Go (Gin)', 'React', 'Supabase'],
    link: 'https://github.com/AshenWishwaGeeth/role-based_authentication_system',
  },
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, transparent 100%)`,
          opacity: 0.05,
          zIndex: 0,
        },
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
                borderRadius: '2px',
              },
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      <strong>Technologies:</strong>{' '}
                      {project.technologies.join(', ')}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;