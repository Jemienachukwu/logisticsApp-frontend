import React, { useState } from "react";
import { RiMapPinAddLine, RiMapPinLine } from "react-icons/ri";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PlaceorderSteps from "../components/PlaceorderSteps";

const Placeorder = () => {
  const navigate = useNavigate();
  const [pickUp, setPickUp] = useState("");
  const [deliver, setDeliver] = useState("");
  const [category, setCategory] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pickUp, deliver, category, deliveryMethod });
    navigate("/placeorder/requestdeivery");
  };

  const modeOfDelivery = ["Dispatch Rider", "Car", "Van"];
  const products = [
    "Furniture",
    "Food",
    "Groceries",
    "Skincare",
    "Electronics",
    "Books",
    "Clothing",
    "Toys",
    "Sporting Goods",
    "Office Supplies",
    "Home Decor",
  ];

  return (
    <div>
      <PlaceorderSteps step1 />

      <Container my="9" bg="#fff">
        <Text textAlign="center" fontWeight="bold" my="5">
          Place Order
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl my="4">
            <InputGroup my="6">
              <Input
                size="md"
                type="text"
                placeholder="Pickup Address"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
                required
              />
              <InputRightElement
                pointerEvents="none"
                children={<RiMapPinAddLine color="gray.300" />}
              />
            </InputGroup>
            <InputGroup my="6">
              <Input
                size="md"
                variant="outline"
                type="text"
                placeholder="Delivery Address"
                value={deliver}
                onChange={(e) => setDeliver(e.target.value)}
                required
              />
              <InputRightElement
                pointerEvents="none"
                children={<RiMapPinLine color="gray.300" />}
              />
            </InputGroup>
            <InputGroup my="6">
              <Select
                placeholder="Select Order Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                {products.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </InputGroup>

            <InputGroup my="6">
              <Select
                placeholder="Select delivery method"
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                required
              >
                {modeOfDelivery.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </InputGroup>

            <Button bg="#35B368" color="#fff" width="100%" my="5" type="submit">
              Place Order
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default Placeorder;
