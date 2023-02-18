import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const UserNavi = () => {
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
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavi;
