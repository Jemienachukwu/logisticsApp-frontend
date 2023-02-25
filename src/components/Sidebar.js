import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrUnorderedList } from "react-icons/gr";
import {
  List,
  ListItem,
  ListIcon,
  Container,
  Text,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Apollo-light.svg";
const Sidebar = () => {
  const links = [
    {
      name: "Dashboard",
      link: "/home",
      icon: MdOutlineDashboard,
    },
    {
      name: "Orders",
      link: "/orders",
      icon: GrUnorderedList,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: MdOutlineDashboard,
    },
    {
      name: "Dispacher",
      link: "/dispatcher",
      icon: MdOutlineDashboard,
    },
  ];
  return (
    <Container width="100%">
      <Text my="30px" fontSize="lg" color="#35B368" fontWeight="bold">
        <img src={logo} alt="logo" />
      </Text>
      <List spacing="2">
        {links.map((item, i) => (
          <ListItem p="2" key={item.name}>
            <NavLink
              className="navItems"
              to={item.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #35B368",
                      color: "#868686",
                    }
                  : undefined
              }
            >
              <ListIcon as={item.icon} color="#35B368" />
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Box></Box>
    </Container>
  );
};

export default Sidebar;
