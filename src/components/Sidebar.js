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
const Sidebar = () => {
  //   const [active, setActive] = useState(false);

  const links = [
    {
      name: "Dashboard",
      link: "/",
      icon: MdOutlineDashboard,
    },
    {
      name: "Orders",
      link: "/orders",
      icon: GrUnorderedList,
    },
    {
      name: "Dashboard",
      link: "/m",
      icon: MdOutlineDashboard,
    },
    {
      name: "Dashboard",
      link: "/k",
      icon: MdOutlineDashboard,
    },
  ];
  return (
    <Container>
      <Text my="30px" fontSize="lg" color="#35B368" fontWeight="bold">
        LOGISTICS APP
      </Text>
      <List spacing={4}>
        {links.map((item, i) => (
          <ListItem p="2">
            <NavLink
              to={item.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderLeft: "2px solid #35B368",
                      color: "#868686",
                      paddingLeft: "10px",
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
