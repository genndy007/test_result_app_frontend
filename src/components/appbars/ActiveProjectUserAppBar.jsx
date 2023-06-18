import {useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

import {getUserData} from '../../api/user';

const HeadingTypography = ({row1, row2}) => {
  return (
    <Typography
      noWrap
      sx={{
        mr: 2,
        fontFamily: 'Helvetica',
        fontWeight: 500,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {row1} <br/> {row2}
    </Typography>
  );
}

const ActiveProjectUserAppBar = () => {
  const [projectName, setProjectName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      setProjectName(userData.user.active_project.name);
      setFullName(userData.user.full_name);
    })()
  }, [])

  return (
    <AppBar position="static" sx={{ bgcolor: "green" }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <HeadingTypography row1="Active project:" row2={projectName}/>
          <HeadingTypography row1="Welcome," row2={`${fullName} !`}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ActiveProjectUserAppBar;