import { Grid, GridItem } from "@chakra-ui/react";
import Map from "../components/Map";
import OrderComponent from "../components/OrderComponent";

const Dashboard = () => {
  const app = process.env.REACT_APP_BASE_URL;
  const me = process.env.REACT_APP_01;
  console.log(me ? me : "null");
  console.log(app);

  return (
    // <Map />

    <Grid
      className="dash"
      h={{
        base: "100%",
        md: "100vh",
        lg: "100vh",
      }}
      templateColumns="repeat(10, 1fr)"
    >
      <GridItem colSpan={{ base: 10, lg: 6, xl: 6 }} className="griditem">
        <Map />
      </GridItem>
      <GridItem colSpan={{ base: 10, lg: 4, xl: 4 }} className="griditem">
        <OrderComponent />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
