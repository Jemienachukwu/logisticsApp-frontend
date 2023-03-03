import React from "react";
// import Map from "./Map";
import Sidebar from "./Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={1}
      bg="#F5f7f5"
    >
      <GridItem
        colSpan={{ base: 12, lg: 2, xl: 2 }}
        rowSpan={{ base: 1, lg: 10, xl: 10 }}
      >
        <Sidebar />
      </GridItem>
      <GridItem
        colSpan={{ base: 12, lg: 10, xl: 10 }}
        rowSpan={{ base: 1, lg: 1, xl: 1 }}
      >
        <Nav />
      </GridItem>
      <GridItem
        colSpan={{ base: 12, lg: 10, xl: 10 }}
        // rowSpan={9}
        rowSpan={{ base: 10, lg: 10, xl: 10 }}
        bg="#E4EAE5"
        overflowX="hidden"
        p="3"
      >
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
