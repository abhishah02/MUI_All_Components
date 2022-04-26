// import React from "react";
// import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import Account from "./Account";
import AdminAccount from "./AdminAccount";

import Drawer from "./Drawer";

const Header = () => {
  const authAdmin = localStorage.getItem("Admin-info");
  return (
    <AppBar position="static">
      <Toolbar>
        <Drawer />
        <Box flexGrow={1} display={{ xs: "none", sm: "block" }}>
          {!authAdmin ? (
            <>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="textPrimary">
                  MUI All Components
                </Typography>
              </Link>
            </>
          ) : (
            <>
              <Link to="/welcome" style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="textPrimary">
                  MUI All Components
                </Typography>
              </Link>
            </>
          )}
        </Box>
        {!authAdmin ? (
          <>
            <Account />
          </>
        ) : (
          <>
            <AdminAccount />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
