import React, { useState } from "react";

import { IconButton } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const AdminAccount = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const authAdmin = localStorage.getItem("Admin-info");
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {!authAdmin ? (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>
                Profile ({JSON.parse(authAdmin).name})
              </MenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </div>
  );
};

export default AdminAccount;
