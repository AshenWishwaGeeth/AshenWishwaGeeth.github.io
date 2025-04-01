import { Box, Card, CardContent, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: 'Blood Donation Mobile App',
    description: 'Simplifies the donation process and boosts community engagement with easy account creation, profile management, and secure communication. It provides a seamless, responsive user experience while safeguarding data.',
    technologies: ['Flutter', 'Firebase'],
    date: 'May 2024'
  },
  {
    title: 'Online Doctor Schedule System',
    description: 'Doctors can efficiently manage schedules, view patient lists, and update profiles, while patients can find doctors, book appointments, and manage their profiles. The app ensures a smooth user experience, streamlining healthcare connections.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'CSS'],
    date: 'December 2024'
  },
  {
    title: 'School Administrative Software',
    description: 'A student management system for schools, enabling tasks like managing student data, marking attendance, managing classrooms, and generating reports or certificates. It streamlines administrative processes with efficient CRUD operations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    date: 'February 2024'
  },
  {
    title: 'Machine Learning for Diabetes Onset Prediction',
    description: 'Predicts the onset of diabetes using algorithms like Decision Tree, KNN, SVM, and Random Forest. Involves data preprocessing, model training, and evaluation to achieve accurate results.',
    technologies: ['Python', 'Pandas', 'Decision Tree', 'KNN', 'SVM', 'Random Forest'],
    date: 'March 2024'
  },
  {
    title: 'Medical Appointment System with QR',
    description: 'Developed a system featuring QR code-based appointment scheduling, PDF generation, and attendance tracking. Java Swing provides the UI, enhancing healthcare efficiency.',
    technologies: ['Java', 'MySQL', 'Java Swing', 'JDBC', 'Eclipse IDE'],
    date: 'March 2024'
  }
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
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    },
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`
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
                        color: theme.palette.text.primary
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
                        lineHeight: 1.7
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    {/* Displaying technologies as comma-separated list */}
                    <Typography 
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        fontWeight: 500
                      }}
                    >
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </Typography>
                    
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontWeight: 500,
                        color: theme.palette.text.secondary
                      }}
                    >
                      {project.date}
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
