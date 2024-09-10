import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Reusable Navbar Item component with routing
const NavbarItem = ({ icon: Icon, label, to, showLabel }) => (
  <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: {xl:"row",lg:"row",md:"column",sm:"column"} }}>
      <IconButton color="inherit">
        <Icon />
      </IconButton>
      {showLabel && <Typography variant="body2">{label}</Typography>}
    </Box>
  </NavLink>
);

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Breakpoint for mobile screens
  
  return (
    <AppBar
      position="fixed"
      sx={{ bottom: 0, top: 'auto', left: 0, right: 0 }}
      color="default"
      elevation={0}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h5">{isMobile ? 'S' : 'SimpleShare'}</Typography> 
        
       
          <Box sx={{ display: {xl:"flex",lg:"flex",md:"none",sm:"none",xs:"none"}, alignItems: 'center' }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Box>
       

        <Box sx={{ display: 'flex', gap: isMobile ? 1 : 3 }}>
          <NavbarItem icon={HomeIcon} label="HOME" to="/" showLabel={!isMobile} />
          <NavbarItem icon={LocalOfferIcon} label="BRAND" to="/brand" showLabel={!isMobile} />
          <NavbarItem icon={CardGiftcardIcon} label="OFFERS" to="/offers" showLabel={!isMobile} />
          <NavbarItem icon={PostAddIcon} label="GEN POST" to="/genpost" showLabel={!isMobile} />
          <NavbarItem icon={AssessmentIcon} label="ANALYSTS" to="/analysts" showLabel={!isMobile} />
        </Box>

        <Avatar sx={{  }}>UN</Avatar> {/* Hide Avatar on mobile */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
