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

const Placeorder = () => {
  const navigate = useNavigate();
  const [pickUp, setPickUp] = useState("");
  const [deliver, setDeliver] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    console.log({ pickUp, deliver, category });
    navigate("/placeorder/requestdeivery");
  };
  const modeOfDelivery = ["Dispatch Rider", "Car", "Van"];
  const products = [
    { name: "Furniture" },
    { name: "Food" },
    { name: "groceroies" },
    { name: "Skincare" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Clothing" },
    { name: "Toys" },
    { name: "Sporting Goods" },
    { name: "Office Supplies" },
    { name: "Home Decor" },
  ];
  return (
    <div>
      <Container p="15" w="lg" maxW="xl" my="9" bg="#fff">
        <Text textAlign="center" as="b" my="5">
          Place Order
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl my="4">
            <InputGroup my="6">
              <Input
                size="md"
                type="text"
                placeholder="Pickup Address"
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
              >
                {products.map((item, i) => (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </InputGroup>

            <InputGroup my="6">
              <Select
                placeholder="Select delivery method"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
