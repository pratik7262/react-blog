import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export const BlogCards = () => {
  return (
    <Stack direction="row" width="1152px" spacing="32px">
      <Card elevation={10} sx={{ maxWidth: "560px", height: "220px" }}>
        <CardActionArea>
          <Box display="flex">
            <CardContent sx={{ width: "400px", padding: "16px" }}>
              <Typography fontSize="1.5rem " fontWeight={500} variant="h2">
                Featured Post
              </Typography>
              <Typography mb='10px' fontSize="0.9rem" variant="h6">
                12 Nov
              </Typography>
              <Typography marginBottom="10px" variant="body1" component="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                odio
              </Typography>
              <Typography
                fontSize="0.875rem"
                variant="h6"
                component="a"
                href="#"
              >
                Continue Reading...
              </Typography>
            </CardContent>
            <CardMedia>
              <img
                width="160px"
                height="220px"
                alt="second"
                src="/images/img_2.jpeg"
              />
            </CardMedia>
          </Box>
        </CardActionArea>
      </Card>
      <Card elevation={10} sx={{ maxWidth: "560px", height: "220px" }}>
        <CardActionArea>
          <Box display="flex">
            <CardContent sx={{ width: "400px", padding: "16px" }}>
              <Typography fontSize="1.5rem " fontWeight={500} variant="h2">
                Famous Post
              </Typography>
              <Typography mb='10px' fontSize="0.9rem" variant="h6">
                18 June
              </Typography>
              <Typography marginBottom="10px" variant="body1" component="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                odio
              </Typography>
              <Typography
                fontSize="0.875rem"
                variant="h6"
                component="a"
                href="#"
              >
                Continue Reading...
              </Typography>
            </CardContent>
            <CardMedia>
              <img
                width="160px"
                height="220px"
                alt="second"
                src="/images/img_2.jpeg"
              />
            </CardMedia>
          </Box>
        </CardActionArea>
      </Card>
    </Stack>
  );
};
