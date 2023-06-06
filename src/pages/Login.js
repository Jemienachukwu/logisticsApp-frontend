import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Container,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { GrFormViewHide } from "react-icons/gr";
import { BsFillEyeFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, loading, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <Container p="15" w="md" maxW="xl" my="9" boxShadow="lg">
      <Image src={logo} alt="logo" h="90px" mb="2" />
      <Text textAlign="center" as="b" my="3">
        LOGIN
      </Text>
      {error ? <Alert status="error">{error}</Alert> : null}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputGroup my="6">
            <Input
              size="md"
              variant="flushed"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup mb="4">
            <Input
              size="md"
              variant="flushed"
              type={showPassword}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
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
            <Spinner size="xl" />
          ) : (
            <Button bg="#35B368" color="#fff" width="100%" my="5" type="submit">
              Login
            </Button>
          )}
        </FormControl>
      </form>
      Don't have an account ? <Link to="/register">Register</Link>
    </Container>
  );
};

export default LoginScreen;
