import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Drawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      {localStorage.getItem("User-info") ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => {}}
          >
            <div className={classes.list}>
              <Box textAlign="center" p={2}>
                Components
              </Box>
              <Divider />
              <List>
                <Link to="/Container" style={{ textDecoration: "none" }}>
                  <ListItem button>
                    <ListItemText
                      primary={"Container"}
                      onClick={() => setOpen(false)}
                    />
                  </ListItem>
                </Link>

                <ListItem button onClick={() => {}}>
                  <ListItemText primary={"Grid"} />
                </ListItem>
                <ListItem button onClick={() => {}}>
                  <ListItemText primary={"Box"} />
                </ListItem>
                <ListItem button onClick={() => {}}>
                  <ListItemText primary={"Cards"} />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </>
      ) : null}
    </div>
  );
};

export default Drawer;
