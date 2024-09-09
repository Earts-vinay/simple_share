import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Reusable Navbar Item component with routing
const NavbarItem = ({ icon: Icon, label, to }) => (
  <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton color="inherit">
        <Icon />
      </IconButton>
      <Typography variant="body2">{label}</Typography>
    </Box>
  </NavLink>
);

const Navbar = () => (
  <AppBar
    position="fixed"
    sx={{ bottom: 0, top: 'auto', left: 0, right: 0 }}
    color="default"
    elevation={0}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">SimpleShare</Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
      </Box>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <NavbarItem icon={HomeIcon} label="HOME" to="/" />
        <NavbarItem icon={LocalOfferIcon} label="BRAND" to="/brand" />
        <NavbarItem icon={CardGiftcardIcon} label="OFFERS" to="/offers" />
        <NavbarItem icon={PostAddIcon} label="GEN POST" to="/genpost" />
        <NavbarItem icon={AssessmentIcon} label="ANALYSTS" to="/analysts" />
      </Box>

      <Avatar>UN</Avatar>
    </Toolbar>
  </AppBar>
);

export default Navbar;
