import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
    const theme = useTheme();

    const contactItems = [
        {
            icon: <EmailIcon fontSize="large" />,
            title: "Email",
            content: (
                <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                    ashenwishwageeth@gmail.com
                </Typography>
            ),
            action: "mailto:ashenwishwageeth@gmail.com",
            color: theme.palette.primary.main
        },
        {
            icon: <PhoneIcon fontSize="large" />,
            title: "Phone",
            content: "+94714318899",
            action: "tel:+94714318899",
            color: theme.palette.secondary.main
        },
        {
            icon: <LocationOnIcon fontSize="large" />,
            title: "Location",
            content: "Colombo, Sri Lanka",
            color: theme.palette.success.main
        }
    ];

    const socialLinks = [
        {
            icon: <LinkedInIcon fontSize="large" />,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ashenwishwageeth",
            color: "#0A66C2"
        },
        {
            icon: <GitHubIcon fontSize="large" />,
            name: "GitHub",
            url: "https://github.com/AshenWishwaGeeth",
            color: "#181717"
        }
    ];

    return (
        <Box 
            id="contact" 
            sx={{ 
                py: 10, 
                backgroundColor: theme.palette.background.paper,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '40%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.light}10 0%, transparent 100%)`,
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
                        Get In Touch
                    </Typography>
                </motion.div>

                <Grid container spacing={6} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Paper 
                                elevation={3} 
                                sx={{ 
                                    p: 4, 
                                    borderRadius: '16px',
                                    background: theme.palette.background.default,
                                    height: '100%'
                                }}
                            >
                                <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
                                    Contact Information
                                </Typography>
                                
                                <Grid container spacing={3}>
                                    {contactItems.map((item, index) => (
                                        <Grid item xs={12} key={index}>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Box
                                                    sx={{
                                                        p: 3,
                                                        borderRadius: '12px',
                                                        backgroundColor: `${item.color}10`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        width: '100%'
                                                    }}
                                                >
                                                    <Avatar sx={{ 
                                                        bgcolor: item.color, 
                                                        color: 'white',
                                                        mr: 3,
                                                        width: 56,
                                                        height: 56
                                                    }}>
                                                        {item.icon}
                                                    </Avatar>
                                                    <Box>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                            {item.title}
                                                        </Typography>
                                                        {item.content}
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                                    Connect With Me
                                </Typography>
                                
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    {socialLinks.map((social, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Button
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener"
                                                variant="outlined"
                                                sx={{
                                                    minWidth: 'auto',
                                                    p: 2,
                                                    borderRadius: '12px',
                                                    borderColor: `${social.color}30`,
                                                    '&:hover': {
                                                        borderColor: social.color,
                                                        backgroundColor: `${social.color}10`
                                                    }
                                                }}
                                            >
                                                <Avatar sx={{ 
                                                    bgcolor: `${social.color}20`, 
                                                    color: social.color,
                                                    width: 48,
                                                    height: 48
                                                }}>
                                                    {social.icon}
                                                </Avatar>
                                            </Button>
                                        </motion.div>
                                    ))}
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;