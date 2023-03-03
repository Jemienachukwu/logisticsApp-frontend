import React from "react";

import {
  RiAddCircleFill,
  RiUserReceivedFill,
  RiEBike2Fill,
  RiLayout2Fill,
  RiFileList2Fill,
} from "react-icons/ri";
import { List, ListItem, ListIcon, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/Apollo-light.svg";
const Sidebar = () => {
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
      <Text
        my="30px"
        fontSize="lg"
        color="#35B368"
        fontWeight="bold"
        textAlign="center"
      >
        Apollo Couriers
        {/* <img src={logo} alt="logo" /> */}
      </Text>
      <List spacing="2" w="100%">
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
      <Box></Box>
    </Box>
  );
};

export default Sidebar;
