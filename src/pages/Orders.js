import {
  // Box,
  // Button,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Alert,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { RxCross2, RxCheck } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ListOrderAction } from "../actions/OrderActions";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orderList);

  useEffect(() => {
    dispatch(ListOrderAction());
  }, [dispatch]);

  return (
    <div>
      <>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Alert status="error">{error}</Alert>
        ) : (
          <TableContainer w="100%">
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>Order Item</Th>
                  <Th>Type of</Th>
                  <Th>Payer</Th>
                  <Th>isDelivered</Th>
                  <Th>isPaid</Th>
                  <Th>Mode of payment</Th>
                  <Th>Amount</Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody>
                {orders?.map((items) => (
                  <Tr key={items.id}>
                    <Td>{items.itemName}</Td>
                    <Td>{items.category}</Td>
                    <Td>{items.payer}</Td>
                    <Td>{items.deliveredAt}</Td>
                    <Td>{items.isPaid ? <RxCheck /> : <RxCross2 />}</Td>
                    <Td>{items.paymentMethod}</Td>
                    <Td>₦ {items.price}</Td>
                    <Td>
                      <Menu>
                        <MenuButton>
                          <SlOptionsVertical />
                        </MenuButton>
                        <MenuList>
                          <Link to={`/order/${items.id}`}>
                            <MenuItem>Details</MenuItem>
                          </Link>
                          <MenuItem bg="tomato" color="#fff">
                            Cancel order
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </>
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
