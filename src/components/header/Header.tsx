import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { LogoSanatarumIcon } from '../../assets/icons/icons';

const Header = () => {
  const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(
    null,
  );
  return (
    <Box className="h-[76px] border-b border-gray-300 w-full flex justify-between items-center bg-[#fff]">
      <Box className=" ml-[20px]">
        <LogoSanatarumIcon />
      </Box>
      <Box>
        <Button
          id="fade-button"
          aria-controls={profileOpen ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={profileOpen ? 'true' : undefined}
          onClick={(e) => setProfileOpen(e.currentTarget)}
        >
          <Typography
            sx={{ color: 'rgba(0, 0, 0, 0.36)' }}
            className="text-sm , leading-5 , tracking-tighter , mr-10 , capitalize"
          >
            Урхунов Дилшод
          </Typography>
          <ArrowDropDownIcon sx={{ fill: 'rgba(0, 0, 0, 0.54)' }} />
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={profileOpen}
          open={Boolean(profileOpen)}
          onClose={() => setProfileOpen(null)}
          className="hidden_profile_block"
        >
          <MenuItem>
            <LogoutTwoToneIcon sx={{ mr: '12px' }} />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
