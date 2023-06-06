import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { HomeVerify } from "../actions/UserAction";
import Footer from "../components/Footer";

// import logo from "../assets/logo.png";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const { userInfo } = useSelector((state) => state.homeVerify);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(HomeVerify(email, phone));
    if (userInfo?.message === "login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <Flex w="100vw" display="flex" justifyContent="space-between" p="2">
        <Spacer />
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
      </Flex>
      <Container my="7em">
        <Text fontSize={["4xl", "5xl"]} as="b" lineHeight="none">
          Got an order you want to deliver ?
        </Text>
        <Text my="4">Rest assured your package is in good hands</Text>
        <form onSubmit={handleSubmit}>
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
          <Button bg="#35B368" color="#fff" width="100%" type="submit">
            Get Started
          </Button>
        </form>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
