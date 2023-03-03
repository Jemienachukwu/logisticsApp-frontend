import { Container, Text, Grid, Box, Button, Spinner } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { VscPackage } from "react-icons/vsc";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ListOrderAction } from "../actions/OrderActions";

const OrderComponent = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orderList);

  useEffect(() => {
    dispatch(ListOrderAction());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Text mb="6">Active orders</Text>

        {loading ? (
          <Spinner />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          orders?.map((items) => (
            <Grid
              my="4"
              bg="white"
              p="3"
              gap="3"
              borderRadius="6px"
              key={items.id}
            >
              <Box display="flex" justifyContent="space-between">
                <Text as="b">ID {items.id}</Text>{" "}
                {items.isPaid && (
                  <Button bg="#35B368" color="#fff" height="6">
                    PAID
                  </Button>
                )}
              </Box>

              <Text fontSize="sm"> {items.itemName}</Text>
              <Text as="sub" fontWeight="bold" color="#868686">
                {items.category}
              </Text>
              <Box as="span" display="flex" alignItems="center" gap="2" my="1">
                <Text as="sub" color="#868686">
                  {items.deliveredAt}
                </Text>
                <CiDeliveryTruck />
                <Text as="sub" color="#868686">
                  {items.shippingAddress}
                </Text>
              </Box>
              <Box as="span" display="flex" alignItems="center" gap="2" my="1">
                <Text as="sub" color="#868686">
                  {items.deliveredAt}
                </Text>
                <VscPackage />
                <Text as="sub" color="#868686">
                  {items.deliveryAddress}
                </Text>
              </Box>
            </Grid>
          ))
        )}
      </Container>
    </div>
  );
};

export default OrderComponent;
