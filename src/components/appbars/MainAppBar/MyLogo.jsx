import React, {Fragment} from 'react';
import BugReportIcon from "@mui/icons-material/BugReport";
import Typography from "@mui/material/Typography";

const MyLogo = ({xs, flexGrow}) => {
  const display = xs ? {xs: 'flex', md: 'none'} : {xs: 'none', md: 'flex'};
  return (
    <Fragment>
      <BugReportIcon sx={{ display: display, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: display,
          fontFamily: 'monospace',
          fontWeight: 700,
          flexGrow: flexGrow,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        TEST RESULT APP
      </Typography>
    </Fragment>
  );
};

export default MyLogo;