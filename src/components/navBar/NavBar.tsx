import { AppBar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

function NavBar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar-container">
      <AppBar className="navbar" position="fixed">
        {isTabletOrMobile ? (
          <div className="navbar-content">
            <a className="navbar-header-link" href="#">
              <span className="navbar-text">^-^</span>
            </a>
            <IconButton sx={{ color: '#f8f7ff' }} onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              <MenuItem onClick={handleClose}>
                <a className="menu-link" href="#about">
                  About
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a className="menu-link" href="#projects">
                  Projects
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a className="menu-link" href="#contact">
                  Contact
                </a>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="navbar-content">
            <a className="navbar-header-link" href="#">
              <span className="navbar-text">^-^</span>
            </a>
            <a className="navbar-link" href="#about">
              About
            </a>
            <a className="navbar-link" href="#projects">
              Projects
            </a>
            <a className="navbar-link" href="#contact">
              Contact
            </a>
          </div>
        )}
      </AppBar>
    </div>
  );
}

export default NavBar;
