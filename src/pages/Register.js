import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { GrFormViewHide } from "react-icons/gr";
import { BsFillEyeFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [Category, setCategory] = useState("");

  const catList = ["Sender", "Rider", "Driver"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = fullName.split(" ")[0];
    const data = { fullName, password, email, phone, Category, firstName };
    console.log(data);
  };

  return (
    <Container p="15" w="lg" maxW="xl" my="9" boxShadow="lg">
      <Image src={logo} alt="logo" h="90px" mb="2" />
      <Text textAlign="center" as="b" my="5">
        SIGNUP
      </Text>
      <FormControl my="4">
        <InputGroup>
          <Select
            placeholder="Select Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {catList.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </InputGroup>
        <InputGroup my="6">
          <Input
            size="md"
            variant="flushed"
            type="text"
            placeholder="Full name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup my="6">
          <Input
            size="md"
            variant="flushed"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup my="6">
          <Input
            size="md"
            variant="flushed"
            type="tel"
            placeholder="Enter your phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup mb="4">
          <Input
            size="md"
            variant="flushed"
            type={showPassword}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup mb="4">
          <Input
            size="md"
            variant="flushed"
            type={showPassword}
            placeholder="confirm password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <InputRightElement
            _hover={{ cursor: "pointer" }}
            children={
              showPassword === "password" ? (
                <GrFormViewHide
                  pointerEvents="visible"
                  onClick={() => setShowPassword("text")}
                />
              ) : (
                <BsFillEyeFill
                  pointerEvents="visible"
                  onClick={() => setShowPassword("password")}
                />
              )
            }
          />
        </InputGroup>
        <Button
          onClick={handleSubmit}
          bg="#35B368"
          color="#fff"
          width="100%"
          my="5"
        >
          SIGN UP
        </Button>
      </FormControl>
      already have an account ? <Link to="/login">LOGIN</Link>
    </Container>
  );
};

export default Register;
