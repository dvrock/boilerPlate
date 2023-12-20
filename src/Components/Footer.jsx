// Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        Your Footer Content
      </Typography>
    </Box>
  );
};

export default Footer;
