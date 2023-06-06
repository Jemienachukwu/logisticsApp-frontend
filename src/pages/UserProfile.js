import { Image, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import userBg from "../assets/userBg.png";
const UserProfile = ({ children }) => {
  const nav = [
    { nav: "profile", link: "/profile" },
    { nav: " edit profile", link: "/editprofile" },
    { nav: "notification", link: "/notification" },
  ];
  return (
    <Box p="5">
      <Box>
        <Flex
          alignItems={["flex-start", "flex-start", "flex-start", "flex-end"]}
          gap="2"
          my="3"
          p="5"
          flexDir={["column", "column", "column", "row"]}
          bgImage={userBg}
          borderRadius="6"
        >
          <Image
            borderRadius="full"
            boxSize="150px"
            // src={userBg}
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Box color="#fff" bg="#35B368" borderRadius="4" p="2">
            <Text as="b">Jemienachukwu Ofoegbu</Text>
            <Text>student</Text>
          </Box>
          <Spacer />
        </Flex>
        <hr />
        <Flex color="#868686" px="3" mr="2" pt={[1, 1, "60px", "60px"]}>
          {nav.map((item, i) => (
            <Text fontSize="xs" m="3" cursor="pointer" key={i}>
              <NavLink
                to={item.link}
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "1px solid #000",
                        color: "#000",
                      }
                    : {
                        color: "#868686",
                      }
                }
              >
                {item.nav}
              </NavLink>
            </Text>
          ))}
        </Flex>
        <Box mt="7">{children}</Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
