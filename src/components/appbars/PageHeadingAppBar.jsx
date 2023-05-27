import React, {Fragment} from 'react';

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

const PageHeadingAppBar = ({name}) => {
  return (
    <Fragment>
      <AppBar position="static" sx={{ bgcolor: "white", display: "flex", justifyContent: 'space-between' }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'Helvetica',
                fontWeight: 500,
                color: 'black',
                textDecoration: 'none',
              }}
            >
              {name}
            </Typography>
            <Tooltip title={`Add new ${name}`}>
              <IconButton
                size="large"
                aria-label="add new item"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="black"
              >
                <AddCircleIcon/>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
      <br/>
    </Fragment>
  );
};

export default PageHeadingAppBar;