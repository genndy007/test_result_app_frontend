import React from 'react';
import {Link} from "react-router-dom";

const MyLink = ({color, name, to}) => {
  return (
    <Link style={{textDecoration: "none", color: color}} to={to}>{name}</Link>
  );
};

export default MyLink;