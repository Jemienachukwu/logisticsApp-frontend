import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Container,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { GrFormViewHide } from "react-icons/gr";
import { BsFillEyeFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../actions/UserAction";

const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const catList = ["Sender", "Rider", "Driver"];

  const { userInfo, loading, error } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(userRegister(fullName, category, email, password, phone));
    }
  };

  return (
    <Container p="15" w="lg" maxW="xl" my="9" boxShadow="lg">
      <Image src={logo} alt="logo" h="90px" mb="2" />
      <Text textAlign="center" as="b" my="5">
        SIGNUP
      </Text>
      {message && <Alert status="error">{message}</Alert>}
      {error && <Alert status="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <FormControl my="4">
          <InputGroup>
            <Select
              placeholder="Select Category"
              value={category}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {loading ? (
            <Spinner />
          ) : (
            <Button bg="#35B368" color="#fff" width="100%" my="5" type="submit">
              SIGN UP
            </Button>
          )}
        </FormControl>
      </form>
      already have an account ? <Link to="/login">LOGIN</Link>
    </Container>
  );
};

export default Register;
