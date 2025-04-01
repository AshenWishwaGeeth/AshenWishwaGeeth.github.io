import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, Chip, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Resume = () => {
  const theme = useTheme();

  const education = [
    {
      degree: 'BSc (Hons) Computer Science',
      institution: 'University of Wolverhampton',
      year: '2025-2026',
      icon: '🎓',
    },
    {
      degree: 'Higher National Diploma in Software Engineering',
      institution: 'National Institute of Business Management',
      year: '2023-2024',
      gpa: 'GPA: 3.8',
      icon: '📚',
    },
    {
      degree: 'Diploma in Software Engineering',
      institution: 'National Institute of Business Management',
      year: '2022-2023',
      gpa: 'GPA: 3.87',
      icon: '🏫',
    },
  ];

  const experience = [
    {
      position: 'Software Developer Intern',
      company: 'Sri Lanka Telecom Head Office',
      year: '2025-2026',
      description: 'As a Software Developer Intern at Sri Lanka Telecom, I help design, code, and test software applications. I work with the team to improve system performance and fix issues, gaining practical experience with industry tools and processes.',
      skills: ['Java', 'Spring Boot', 'SQL', 'Agile'],
      icon: '💻',
    },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'AshenWishwaGeeth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box 
      id="resume" 
      sx={{ 
        py: 10, 
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, transparent 100%)`,
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
              mb: 6,
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
            My Resume
          </Typography>
        </motion.div>

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={downloadResume}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                boxShadow: `0 4px 20px ${theme.palette.primary.light}80`,
                '&:hover': {
                  boxShadow: `0 6px 24px ${theme.palette.primary.light}`
                }
              }}
            >
              Download CV
            </Button>
          </motion.div>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 4,
                p: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.light}10, transparent)`,
                borderRadius: '12px'
              }}>
                <SchoolIcon sx={{ 
                  mr: 2, 
                  fontSize: '2rem', 
                  color: theme.palette.primary.main 
                }} />
                <Typography variant="h4" component="h3">
                  Education
                </Typography>
              </Box>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 3, 
                      mb: 3, 
                      borderRadius: '12px',
                      borderLeft: `4px solid ${theme.palette.primary.main}`,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ 
                        bgcolor: theme.palette.primary.light, 
                        color: theme.palette.primary.contrastText,
                        mr: 2,
                        width: 40,
                        height: 40
                      }}>
                        {edu.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" component="h4" gutterBottom>
                          {edu.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {edu.institution}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        {edu.year}
                      </Typography>
                      {edu.gpa && (
                        <Chip 
                          label={edu.gpa} 
                          size="small" 
                          sx={{ 
                            backgroundColor: theme.palette.success.light,
                            color: theme.palette.success.contrastText,
                            fontWeight: 600
                          }} 
                        />
                      )}
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 4,
                p: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.light}10, transparent)`,
                borderRadius: '12px'
              }}>
                <WorkIcon sx={{ 
                  mr: 2, 
                  fontSize: '2rem', 
                  color: theme.palette.primary.main 
                }} />
                <Typography variant="h4" component="h3">
                  Experience
                </Typography>
              </Box>
              
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 3, 
                      mb: 3, 
                      borderRadius: '12px',
                      borderLeft: `4px solid ${theme.palette.secondary.main}`,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ 
                        bgcolor: theme.palette.secondary.light, 
                        color: theme.palette.secondary.contrastText,
                        mr: 2,
                        width: 40,
                        height: 40
                      }}>
                        {exp.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" component="h4" gutterBottom>
                          {exp.position}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {exp.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {exp.year}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.skills?.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.getContrastText(theme.palette.primary.light),
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;