import {
  Box,
  Button,
  Container,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
const Home = () => {
  const products = [
    { name: "Furniture" },
    { name: "Food" },
    { name: "Skincare" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Clothing" },
    { name: "Toys" },
    { name: "Sporting Goods" },
    { name: "Office Supplies" },
    { name: "Home Decor" },
  ];
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  console.log({ phone, email });
  return (
    <>
      <Box
        w="100vw"
        boxShadow="xl"
        display="flex"
        justifyContent="space-between"
        p="2"
      >
        <Image src={logo} alt="logo" h="50px" />
        <Box>
          <Link to="/login">
            <Button bg="#000" color="#fff" _hover={{ bg: "#000" }}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              ml="4"
              bg="transparent"
              border="1px solid #35B368"
              _hover={{ bg: "transparent" }}
            >
              Signup
            </Button>
          </Link>
        </Box>
      </Box>
      <Container mt="10">
        <Text fontSize="5xl" as="b" lineHeight="none">
          Got an order you want to deliver ?
        </Text>
        <Text my="4">
          List your item and let delivery companies compete for your job.
        </Text>
        <form>
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

          <InputGroup my="6">
            <Input
              size="md"
              variant="outline"
              type="email"
              placeholder="Enter Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup my="6">
            <InputLeftAddon children="+234" />

            <Input
              size="md"
              variant="outline"
              type="tel"
              placeholder="Enter Your phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
          <Link to="/login">
            <Button bg="#35B368" color="#fff" width="100%" type="submit">
              Get Started
            </Button>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default Home;
