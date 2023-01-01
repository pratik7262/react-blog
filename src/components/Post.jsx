import { Box, Typography } from "@mui/material";
import React from "react";
import Para from "./Para";

const Post = ({postNo}) => {
  return (
    <Box padding="24px 0" width="100%">
      <Typography variant="h1" mb="12px" fontWeight={500} fontSize="2.125rem">
        A Sample Posts #{postNo}
      </Typography>
      <Typography
        variant="body1"
        mb="16px"
        fontWeight={400}
        fontSize="1rem"
        component="p"
        fontStyle="italic"
      >
        22 March,2020 by{" "}
        <Typography variant="caption" component="a" href="#">
          Oliver
        </Typography>
      </Typography>
      <Para
        content="This blog post shows a few different types of content that are supported
        and styled with Material styles. Basic typography, images, and code are
        all supported. You can extend these by modifying Markdown.js"
      />
      <Para
        content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum."
      />
      <Para
        content="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit"
      />
      <Para
        content=" Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
      />
      <Typography variant="h2" mb="16px" fontWeight={500} fontSize="1.125rem">
        HEADING
      </Typography>
      <Para
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros."
      />
      <Para
        content=" Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
        porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus."
      />
    </Box>

  );
};

export default Post;
