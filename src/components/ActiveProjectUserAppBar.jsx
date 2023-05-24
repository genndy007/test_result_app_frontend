import React from 'react';
import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

const ActiveProjectUserAppBar = ({projectName, userName}) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "green" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Active project: <br/>{projectName}
          </Typography>
          <Typography
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Welcome, <br/>{userName} !
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ActiveProjectUserAppBar;