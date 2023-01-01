import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { BlogCards } from "./components/BlogCards";
import { MainContainer } from "./components/MainContainer";
import { Categories } from "./components/Categories";
import { Navbar } from "./components/Navbar";
import { Thumbnail } from "./components/Thumbnail";
import Footer from "./components/Footer";
import { Mobile } from "./components/Mobile";
// import SpeedDial from "./components/SpeedDial";

const App = () => {
  const isDeskTop = useMediaQuery("(min-width:1100px)");
  return (
    <>
      {isDeskTop ? (
        <>
          <Box width="1200px" className="app">
            <Navbar />
            <Categories />
            <Thumbnail />
            <BlogCards />
            <MainContainer />
          </Box>
          <Footer />
        </>
      ) : (
        <Box  className="app">
          <Mobile />
        </Box>
      )}
    </>
  );
};

export default App;
