import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width='1152px'
      padding='24px'
      height="63px"
      margin="auto"
      borderBottom='1px solid grey'
    >
      <Button sx={{fontWeight:'bold'}} variant="text">
        SUBSCRIBE
      </Button>
      <Typography variant="h5"  sx={{fontWeight:'bold'}} component="h1">
        Blog
      </Typography>
      <Box display="flex" alignItems="center">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <Button variant="outlined">Sign Up</Button>
      </Box>
    </Box>
  );
};
