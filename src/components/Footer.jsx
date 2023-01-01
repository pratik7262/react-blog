import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box display="flex" flexDirection='column' padding="48px 0" alignItems="center" textAlign="center">
      <Typography variant="h2" mb="7px" fontWeight={500} fontSize="1.125rem">
        Footer
      </Typography>
      <Typography
        variant="body1"
        fontWeight={400}
        fontSize="1rem"
        lineHeight="1.5"
        mb="7px"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Typography fontWeight={400} fontSize="0.875" variant="caption">
        Copyright ©{" "}
        <Typography variant="caption" component="a" color="black" href="#">
          Your Website
        </Typography>{" "}
        2022.
      </Typography>
    </Box>
  );
};

export default Footer;
