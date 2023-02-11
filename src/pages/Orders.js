import { Container, Text, Grid, Box, Button, Input } from "@chakra-ui/react";
import { CiDeliveryTruck, CiSearch } from "react-icons/ci";
import { VscPackage } from "react-icons/vsc";
import React, { useState, useEffect } from "react";

const Orders = () => {
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
  const shoppingCart = [
    {
      id: 78341,
      itemName: "iPhone",
      price: 999.99,
      deliveredAt: "Dec, 2022",
      paymentMethod: "Credit Card",
      isPaid: false,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "123 Main St, Anytown, USA 12345",
      paidAt: "2022-11-30T23:59:59",
      category: "Smartphone",
    },
    {
      id: 16782,
      itemName: "MacBook Pro",
      price: 1499.99,
      deliveredAt: "Dec, 2022",
      paymentMethod: "PayPal",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "456 Elm St, Anytown, USA 12345",
      paidAt: "2022-12-01T00:01:00",
      category: "Laptop",
    },
    {
      id: 45673,
      itemName: "Apple Watch",
      price: 399.99,
      deliveredAt: "Dec, 2022",
      paymentMethod: "Credit Card",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "789 Oak Ave, Anytown, USA 12345",
      paidAt: "2022-11-30T12:34:56",
      category: "Wearable",
    },
    {
      id: 27894,
      itemName: "Samsung TV",
      price: 799.99,
      deliveredAt: "Apr, 2022",
      paymentMethod: "PayPal",
      isPaid: false,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "246 Birch Rd, Anytown, USA 12345",
      paidAt: "2022-12-01T01:23:45",
      category: "Television",
    },
    {
      id: 34615,
      itemName: "Amazon Echo",
      price: 99.99,
      deliveredAt: "Jun, 2022",
      paymentMethod: "Credit Card",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "369 Maple Ln, Anytown, USA 12345",
      paidAt: "2022-11-30T23:59:59",
      category: "Smart Speaker",
    },
    {
      id: 16356,
      itemName: "Google Home",
      price: 79.99,
      deliveredAt: "Mar, 2022",
      paymentMethod: "PayPal",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "159 Pine St, Anytown, USA 12345",
      paidAt: "2022-12-01T00:01:00",
      category: "Smart Speaker",
    },
    {
      id: 66097,
      itemName: "Fitbit Charge 4",
      price: 149.99,
      deliveredAt: "Sept, 2022",
      paymentMethod: "Credit Card",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "753 Cedar Blvd, Anytown, USA 12345",
      paidAt: "2022-11-30T12:34:56",
      category: "Fitness Tracker",
    },
    {
      id: 90788,
      itemName: "Fitness Tracker",
      price: 99.99,
      deliveredAt: "Aug, 2022",
      paymentMethod: "Credit Card",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "369 Cedar St, Anytown, USA 12345",
      paidAt: "2022-12-07T20:00:00",
      category: "Wearable Technology",
    },
    {
      id: 55679,
      itemName: "Wireless Earbuds",
      price: 79.99,
      deliveredAt: "Oct ,2022",
      paymentMethod: "PayPal",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "159 Maple St, Anytown, USA 12345",
      paidAt: "2022-12-09T12:00:00",
      category: "Audio Devices",
    },
    {
      id: 23610,
      itemName: "Smart TV",
      price: 699.99,
      deliveredAt: "Nov, 2022",
      paymentMethod: "Credit Card",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "753 Cherry St, Anytown, USA 12345",
      paidAt: "2022-12-11T15:00:00",
      category: "Television",
    },
    {
      id: 11096,
      itemName: "Tablet",
      price: 299.99,
      deliveredAt: "Jan, 2022",
      paymentMethod: "Credit Card",
      isPaid: true,
      shippingAddress: "2 main st, somewhere town",
      deliveryAddress: "789 Oak St, Anytown, USA 12345",
      paidAt: "2022-12-03T12:00:00",
      category: "Mobile Devices",
    },
  ];
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(shoppingCart);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    const filteredSearch = shoppingCart.filter((item) =>
      item.itemName.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(filteredSearch);
  };
  console.log(search);
  // console.log(filteredData);
  useEffect(() => {}, [setFilteredData]);

  return (
    <div>
      <Container>
        <Text mb="6">Active orders</Text>
        <Box position="relative" display="flex" justifyContent="space-between">
          <Box position="absolute" zIndex="1" top="13px" left="3px">
            <CiSearch />
          </Box>
          <Input
            variant="outline"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            bg="#fff"
            pl="6"
          />
        </Box>
        {filteredData.map((items) => (
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
        ))}
      </Container>
    </div>
  );
};

export default Orders;
