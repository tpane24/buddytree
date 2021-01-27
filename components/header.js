// components/header.js

import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client';
import { useCallback, useEffect, useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const Header = () => {
  const [session, loading] = useSession();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <nav>
        <Box borderBottom={1} style={{ marginTop: '15px' }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Link href="/">
                <Typography variant="h3" gutterBottom>
                      <span style={{ color: '#036994' }}>buddytree</span>
                </Typography>
              </Link>
            </Grid>
              {!session && (
                <Grid item xs={6}>
                  <Tooltip title="Sign In" style={{ float: 'right' }}>
                    <a
                      href="/api/auth/signin"
                      onClick={(e) => {
                        e.preventDefault();
                        signin();
                      }}
                    >
                      <ArrowForwardIcon fontSize="large" style={{ color: '#036994' }} />
                    </a>
                  </Tooltip>
                </Grid>
              )}
              {session && (
                <Grid item xs={6}>
                  <Button style={{ float: 'right' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <a>
                      <span
                        style={{ backgroundImage: `url(${session.user.image})` }}
                        className="avatar"
                      />
                    </a>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Divider light />
                    <MenuItem className="menuItem" onClick={handleClose}>
                      <Link href="/">
                        <Typography variant="button" gutterBottom>
                          Home
                        </Typography>
                      </Link>
                    </MenuItem>
                    <Divider light />
                    <MenuItem className="menuItem" onClick={handleClose}>
                      <Link href="/profile">
                        <Typography variant="button" gutterBottom>
                          Profile
                        </Typography>
                      </Link>
                    </MenuItem>
                    <Divider light />
                    <MenuItem className="menuItem" onClick={handleClose}>
                        <Typography variant="button" gutterBottom>
                          <a
                            href="/api/auth/signout"
                            style={{ 
                              textDecoration: 'none', 
                              color: 'black' 
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              signout();
                            }}
                          >
                            Sign Out
                          </a>
                        </Typography>
                    </MenuItem>
                    <Divider light />
                  </Menu>
                </Grid>
              )}
          </Grid>
        </Box>
      </nav>

      <style jsx>{`
        .avatar {
          border-radius: 2rem;
          float: right;
          height: 2.2rem;
          width: 2.2rem;
          background-color: white;
          background-size: cover;
          border: 2px solid #ddd;
        }
        .menuItem {
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default Header;