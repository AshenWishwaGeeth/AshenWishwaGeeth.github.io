import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/AshenWishwaGeeth',
      tooltip: 'GitHub',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/ashenwishwageeth',
      tooltip: 'LinkedIn',
    },
  ];

  return (
    <Box sx={{ display: 'flex', ml: 2 }}>
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Tooltip title={link.tooltip}>
            <IconButton
              href={link.url}
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ mx: 0.5 }}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  );
};

export default SocialIcons;