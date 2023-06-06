import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Container,
} from "@chakra-ui/react";
import { GrFormViewHide } from "react-icons/gr";
import { BsFillEyeFill } from "react-icons/bs";
import UserProfile from "../pages/UserProfile";

const UserEdit = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log({ email, phone, password, firstName, lastName });
  return (
    <UserProfile>
      <form>
        <Container bg="#fff">
          <FormControl my="4">
            <InputGroup
              my="6"
              gap="2"
              display={["block", "block", "flex", "flex"]}
            >
              <Input
                size="md"
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                size="md"
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
                mt={["6", "6", "0", "0"]}
              />
            </InputGroup>

            <InputGroup my="6">
              <Input
                size="md"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup my="6">
              <Input
                size="md"
                type="tel"
                placeholder="Enter your phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup mb="4">
              <Input
                size="md"
                type={showPassword}
                placeholder="Change password"
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

            <Button bg="#35B368" color="#fff" width="100%" my="5" type="submit">
              UPDATE PROFILE
            </Button>
          </FormControl>
        </Container>
      </form>
    </UserProfile>
  );
};

export default UserEdit;
