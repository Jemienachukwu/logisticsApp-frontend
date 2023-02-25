import {
  Container,
  Text,
  Grid,
  Box,
  Button,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { CiDeliveryTruck, CiSearch } from "react-icons/ci";
import { VscPackage } from "react-icons/vsc";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ListOrderAction } from "../actions/OrderActions";

const Orders = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orderList);

  useEffect(() => {
    dispatch(ListOrderAction());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Text mb="6">Active orders</Text>
        <Box position="relative" display="flex" justifyContent="space-between">
          <Box position="absolute" zIndex="1" top="13px" left="3px">
            <CiSearch />
          </Box>
          <Input variant="outline" placeholder="Search" bg="#fff" pl="6" />
        </Box>
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

export default Orders;
//   const data = [
//     {
//       item: "order name",
//       paymentMethod: "paypal",
//       taxPrice: 90,
//       shippingPrice: 0,
//       totalPrice: 689.99,
//       isPaid: true,
//       isDelivered: false,
//       createdAt: "April, 2023",
//       updatedAt: "April, 2023",
//       paidAt: "2023-01-16",
//     },
//     {
//       item: "order name",
//       paymentMethod: "paypal",
//       taxPrice: 90,
//       shippingPrice: 0,
//       totalPrice: 689.99,
//       isPaid: true,
//       isDelivered: false,
//       createdAt: "April, 2023",
//       updatedAt: "April, 2023",
//       paidAt: "2023-01-16",
//     },
//     {
//       item: "order name",
//       paymentMethod: "paypal",
//       taxPrice: 90,
//       shippingPrice: 0,
//       totalPrice: 689.99,
//       isPaid: true,
//       isDelivered: false,
//       createdAt: "April, 2023",
//       updatedAt: "April, 2023",
//       paidAt: "2023-01-16",
//     },
//     {
//       item: "order name",
//       paymentMethod: "paypal",
//       taxPrice: 90,
//       shippingPrice: 0,
//       totalPrice: 689.99,
//       isPaid: true,
//       isDelivered: false,
//       createdAt: "April, 2023",
//       updatedAt: "April, 2023",
//       paidAt: "2023-01-16",
//     },
//     {
//       item: "order name",
//       paymentMethod: "paypal",
//       taxPrice: 90,
//       shippingPrice: 0,
//       totalPrice: 689.99,
//       isPaid: true,
//       isDelivered: false,
//       createdAt: "April, 2023",
//       updatedAt: "April, 2023",
//       paidAt: "2023-01-16",
//     },
//   ];
//   const shopingCart = [
//     {
//       id: 1,
//       itemName: "Apple",
//       price: 0.99,
//       deliveredAt: "2022-12-01",
//       paymentMethod: "Credit Card",
//       isPaid: true,
//       shippingAddress: "123 Main St, San Francisco, CA 94122",
//       paidAt: "2022-11-30",
//     },
//     {
//       id: 2,
//       itemName: "Banana",
//       price: 0.5,
//       deliveredAt: "2022-12-03",
//       paymentMethod: "PayPal",
//       isPaid: true,
//       shippingAddress: "456 Market St, San Francisco, CA 94111",
//       paidAt: "2022-12-01",
//     },
//     {
//       id: 3,
//       itemName: "Cherry",
//       price: 2.99,
//       deliveredAt: "2022-12-05",
//       paymentMethod: "Credit Card",
//       isPaid: false,
//       shippingAddress: "789 Valencia St, San Francisco, CA 94110",
//       paidAt: null,
//     },
//     {
//       id: 4,
//       itemName: "Durian",
//       price: 5.99,
//       deliveredAt: "2022-12-07",
//       paymentMethod: "PayPal",
//       isPaid: true,
//       shippingAddress: "246 Geary St, San Francisco, CA 94102",
//       paidAt: "2022-12-02",
//     },
//     {
//       id: 5,
//       itemName: "Elderberry",
//       price: 3.99,
//       deliveredAt: "2022-12-09",
//       paymentMethod: "Credit Card",
//       isPaid: false,
//       shippingAddress: "135 Fillmore St, San Francisco, CA 94117",
//       paidAt: null,
//     },
//     {
//       id: 6,
//       itemName: "Fig",
//       price: 1.99,
//       deliveredAt: "2022-12-11",
//       paymentMethod: "PayPal",
//       isPaid: true,
//       shippingAddress: "369 Haight St, San Francisco, CA 94102",
//       paidAt: "2022-12-03",
//     },
//     {
//       id: 7,
//       itemName: "Grape",
//       price: 4.99,
//       deliveredAt: "2022-12-13",
//       paymentMethod: "Credit Card",
//       isPaid: false,
//       shippingAddress: "159 Castro St, San Francisco, CA 94114",
//       paidAt: null,
//     },
//     {
//       id: 8,
//       itemName: "Honeydew",
//       price: 2.49,
//       deliveredAt: "2022-12-15",
//       paymentMethod: "PayPal",
//       isPaid: true,
//       shippingAddress: "753 Divisadero St, San Francisco, CA 94117",
//       paidAt: "2022-12-04",
//     },
//     {
//       id: 9,
//       itemName: "Iced Melon",
//       price: 1.49,
//       deliveredAt: "2022-12-",
//     },
//   ];
