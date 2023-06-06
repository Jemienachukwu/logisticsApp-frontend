import { Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import UserProfile from "../pages/UserProfile";

const UserDetails = () => {
  return (
    <UserProfile>
      <Flex gap="5" flexDir={["column", "column", "column", "row"]}>
        <Box w={["100%", "100%", "100%", "55%"]}>
          <Text as="b" fontSize="sm" color="#868686">
            Personal Information
          </Text>
          <Box border="1px solid #A9A9A9" borderRadius="6" px="6">
            <Flex gap="5" mt="6" flexDir={["column", "column", "row", "row"]}>
              <Box>
                <Text>Full Name:</Text>
                <Box
                  color="grey"
                  bg="#F5f7f5"
                  p="2"
                  w="fit-content"
                  borderRadius="5"
                >
                  Jemienachukwu Ofoegbu
                </Box>
              </Box>
              <Box>
                <Text>Email:</Text>
                <Box
                  color="grey"
                  bg="#F5f7f5"
                  p="2"
                  w="fit-content"
                  borderRadius="5"
                >
                  jemi@email.com
                </Box>
              </Box>
            </Flex>
            <Box my="4">
              <Text>Phone Number:</Text>
              <Box
                color="grey"
                bg="#F5f7f5"
                p="2"
                w="fit-content"
                borderRadius="5"
              >
                09038904490
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w={["100%", "100%", "40%", "40%"]}>
          <Text as="b" fontSize="sm" color="#868686">
            Default delivery address
          </Text>
          <Box border="1px solid #A9A9A9" borderRadius="6" p="6">
            <Text>Your default shipping address:</Text>
            <Text color="grey">{"No default shipping address available"}</Text>
            <Box
              color="#35B368"
              p="3"
              bg="#F5f7f5"
              my="5"
              w="fit-content"
              borderRadius="5"
              cursor="pointer"
            >
              ADD DEFAULT ADDRESS
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box my="4" border="1px solid #A9A9A9" borderRadius="6" p="6">
        <Text>Account type:</Text>
        <Box color="grey" bg="#F5f7f5" p="2" w="fit-content" borderRadius="5">
          Sender
        </Box>
      </Box>
    </UserProfile>
  );
};

export default UserDetails;
