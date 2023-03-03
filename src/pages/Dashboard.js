import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Map from "../components/Map";
import OrderComponent from "../components/OrderComponent";

const Dashboard = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(10, 1fr)"
    >
      <GridItem
        bg="black"
        colSpan={{ base: 10, lg: 6, xl: 6 }}
        rowSpan={{ base: 2, lg: 3, xl: 3 }}
      >
        hiii
      </GridItem>

      <GridItem
        colSpan={{ base: 10, lg: 4, xl: 4 }}
        // rowSpan={5}
        rowSpan={{ base: 2, lg: 5, xl: 5 }}
        overflowX="hidden"
      >
        <OrderComponent />
      </GridItem>
      <GridItem
        colSpan={{ base: 10, lg: 6, xl: 6 }}
        rowSpan={{ base: 1, lg: 2, xl: 2 }}
      >
        <Map />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
