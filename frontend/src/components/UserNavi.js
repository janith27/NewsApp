import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const UserNavi = () => {
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
      </Toolbar>
    </AppBar>
  );
};

export default UserNavi;
