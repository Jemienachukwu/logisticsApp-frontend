import React from "react";
import Map from "./Map";
import Sidebar from "./Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    // <Grid
    //   h="200px"
    //   templateRows="repeat(10, 1fr)"
    //   templateColumns="repeat(5, 1fr)"
    //   gap={3}
    // >
    //   <GridItem colSpan={1} rowSpan={10}>
    //     <Sidebar />
    //   </GridItem>

    //   <GridItem colSpan={4} rowSpan={2} bg="red">
    //     nav hshshshshshsh
    //   </GridItem>

    //   <GridItem
    //     colSpan={2}
    //     rowSpan={8}
    //     bg="#E4EAE5"
    //     height="100vh"
    //     overflowX="hidden"
    //     py="5"
    //   >
    //     {children}
    //   </GridItem>
    //   <GridItem colSpan={2} rowSpan={8}>
    //     <Map />
    //   </GridItem>
    // </Grid>

    <Grid
      h="100vh"
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={0}
    >
      <GridItem colSpan={2} rowSpan={10}>
        <Sidebar />
      </GridItem>
      <GridItem colSpan={10} rowSpan={1}>
        nav
      </GridItem>
      <GridItem colSpan={4} rowSpan={9} bg="#E4EAE5" overflowX="hidden" py="5">
        {children}
      </GridItem>
      <GridItem colSpan={6} rowSpan={9}>
        <Map />
      </GridItem>
    </Grid>
  );
};

export default Layout;
