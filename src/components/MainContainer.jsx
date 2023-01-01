import { Typography, Box, Stack, Paper, IconButton } from "@mui/material";
import React from "react";
import Para from "./Para";
import Post from "./Post";
import { archives } from "../data/archives";
import { socials } from "../data/socials";

export const MainContainer = () => {
  return (
    <Stack
      direction="row"
      pt="40px"
      fontWeight="500"
      fontSize="1.25rem"
      width="1152px"
      spacing={5}
    >
      <Box width="754px">
        <Typography variant="h6" mb="7px">
          From The Firehose
        </Typography>
        <hr />
        <Post postNo="1" />
        <Post postNo="2" />
      </Box>
      <Box width="358px">
        <Paper elevation={3}>
          <Box sx={{ width: "100%", height: "167px", padding: "16px" }}>
            <Typography fontWeight={500} fontSize="1.125rem" variant="h6">
              ABOUT
            </Typography>
            <Para content="Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur." />
          </Box>
        </Paper>
        <Box width="100%" mt="24px">
          <Paper elevation={3}>
            <Box sx={{ width: "100%", padding: "16px" }}>
              <Typography
                fontWeight={500}
                mb="7px"
                fontSize="1.125rem"
                variant="h6"
              >
                Archives
              </Typography>
              {archives.map((arc) => {
                return (
                  <Typography
                   key={arc}
                    variant="body2"
                    fontWeight={400}
                    fontSize="1rem"
                    lineHeight="1.5"
                    color={"primary.main"}
                    display="block"
                    component="a"
                    href="#"
                  >
                    {arc}
                  </Typography>
                );
              })}
            </Box>
          </Paper>
        </Box>
        <Box width="100%" mt="24px">
          <Paper elevation={3}>
            <Box sx={{ width: "100%", padding: "16px" }}>
              <Typography
                fontWeight={500}
                mb="7px"
                fontSize="1.125rem"
                variant="h6"
              >
                Social
              </Typography>
              <Box>
                {socials.map((sc) => {
                  return (
                    <Box key={sc.text}>
                    <IconButton>
                      {sc.icon}
                      <Typography
                        variant="body2"
                        fontWeight={400}
                        fontSize="1rem"
                        lineHeight="1.5"
                        color={"primary.main"}
                        display="block"
                        component="a"
                        href="#"
                        ml="8px"
                      >
                        {sc.text}
                      </Typography>
                    </IconButton>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Stack>
  );
};
