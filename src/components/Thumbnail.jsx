import { Box, Paper } from "@mui/material";
import React from "react";

export const Thumbnail = () => {
  return (
    <Paper elevation={2}>
      <Box
        width="1152px"
        margin="auto"
        marginBottom="32px"
        overflow="hidden"
        height="364px"
      >
        <img
          style={{ width: "1152px" }}
          src="/images/img_2.jpeg"
          alt="img"
        />
      </Box>
    </Paper>
  );
};
