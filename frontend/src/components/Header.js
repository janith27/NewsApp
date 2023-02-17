import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(232,8,22,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">NewsApp</Typography>
        <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/allnews" label="News" />
            <Tab LinkComponent={Link} to="/newschange" label="Edit News" />
            <Tab LinkComponent={Link} to="/admin/add" label="Add News" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button
            onClick={() => dispatch(authActions.logout())}
            LinkComponent={Link}
            to="/admin/login"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
