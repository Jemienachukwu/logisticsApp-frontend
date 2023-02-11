import React from "react";
import Map from "./Map";
import Sidebar from "./Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Grid h="200px" templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        <Sidebar />
      </GridItem>
      <GridItem
        colSpan={2}
        bg="#E4EAE5"
        height="100vh"
        overflowX="hidden"
        py="5"
      >
        {children}
      </GridItem>
      <GridItem colSpan={3}>
        <Map />
      </GridItem>
    </Grid>
  );
};

export default Layout;
