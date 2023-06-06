import React from "react";

import {
  RiAddCircleFill,
  RiUserReceivedFill,
  RiEBike2Fill,
  RiLayout2Fill,
  RiFileList2Fill,
} from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import {
  List,
  ListItem,
  ListIcon,
  Text,
  Box,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ handleToggle }) => {
  const links = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: RiLayout2Fill,
    },
    {
      name: "place Order",
      link: "/placeorder",
      icon: RiAddCircleFill,
    },
    {
      name: "Orders",
      link: "/orders",
      icon: RiFileList2Fill,
    },
    {
      name: "Receiver",
      link: "/contact",
      icon: RiUserReceivedFill,
    },
    {
      name: "Dispacher",
      link: "/dispatcher",
      icon: RiEBike2Fill,
    },
  ];
  return (
    <Box width="100%">
      <Flex alignItems="center">
        <Spacer />
        <Text
          my="30px"
          fontSize="lg"
          color="#35B368"
          fontWeight="bold"
          textAlign="center"
        >
          Apollo Couriers
        </Text>
        <Spacer />
        <Box mr="2">
          <IconButton
            onClick={handleToggle}
            display={["flex", "flex", "flex", "none"]}
            aria-label="close Menu"
            size="lg"
            bg="#35B368"
            color="#fff"
            icon={<AiOutlineClose />}
          />
        </Box>
      </Flex>
      <List
        spacing="2"
        w="100%"
        alignItems="center"
        display={["none", "none", "block", "block"]}
      >
        {links.map((item, i) => (
          <ListItem key={item.name} py="3">
            <NavLink
              className="navItems"
              to={item.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderLeft: "4px solid #35B368",
                      color: "#35B368",
                      paddingLeft: "20px",
                    }
                  : {
                      color: "#868686",
                      paddingLeft: "20px",
                    }
              }
            >
              <ListIcon as={item.icon} />
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>

      <List
        spacing="2"
        w="100%"
        alignItems="center"
        display={["block", "block", "none", "none"]}
      >
        {links.map((item, i) => (
          <ListItem key={item.name} py="3">
            <NavLink
              className="navItems"
              onClick={handleToggle}
              to={item.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderLeft: "4px solid #35B368",
                      color: "#35B368",
                      paddingLeft: "20px",
                    }
                  : {
                      color: "#868686",
                      paddingLeft: "20px",
                    }
              }
            >
              <ListIcon as={item.icon} />
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
