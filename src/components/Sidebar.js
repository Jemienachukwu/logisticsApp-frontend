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
  return (
    <Container>
      <Text my="30px" fontSize="lg" color="#35B368" fontWeight="bold">
        LOGISTICS APP
      </Text>
      <List spacing={4}>
        <ListItem p="2">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { borderLeft: "2px solid #35B368", color: "#868686" }
                : undefined
            }
          >
            <ListIcon as={MdOutlineDashboard} color="#35B368" />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem p="2">
          <NavLink
            to="/orders"
            style={({ isActive }) =>
              isActive
                ? { borderLeft: "2px solid #35B368", color: "#868686" }
                : undefined
            }
          >
            <ListIcon as={GrUnorderedList} color="#35B368" />
            Orders
          </NavLink>
        </ListItem>
        <ListItem p="2">
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? { borderLeft: "2px solid #35B368", color: "#868686" }
                : undefined
            }
          >
            <ListIcon as={MdOutlineDashboard} color="#35B368" />
            Contact
          </NavLink>
        </ListItem>
        <ListItem p="2">
          <NavLink
            to="/driver"
            style={({ isActive }) =>
              isActive
                ? { borderLeft: "2px solid #35B368", color: "#868686" }
                : undefined
            }
          >
            <ListIcon as={MdOutlineDashboard} color="#35B368" />
            Driver
          </NavLink>
        </ListItem>
        {/* <NavLink
          to="/orders"
          style={({ isActive }) =>
            isActive ? { borderLeft: "2px solid #35B368", color:'#868686' } : undefined
          }
        >
          <ListItem p="2">
            <ListIcon as={GrUnorderedList} color="#35B368" />
            Orders
          </ListItem>
        </NavLink> */}
        {/* <NavLink
          to="/orders"
          style={({ isActive }) =>
            isActive ? setActive(true) : setActive(false)
          }
        >
          <ListItem p="2" borderLeft={active ? "2px solid, color:'#868686' #35B368" : undefined}>
            <ListIcon as={GrUnorderedList} color="#35B368" />
            Orders
          </ListItem>
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? setActive(true) : setActive(false)
          }
        >
          <ListItem p="2" borderLeft={active ? "2px solid, color:'#868686' #35B368" : undefined}>
            <ListIcon as={MdOutlineDashboard} color="#35B368" />
            Contact
          </ListItem>
        </NavLink>
        <NavLink
          to="/driver"
          style={({ isActive }) =>
            isActive ? setActive(true) : setActive(false)
          }
        >
          <ListItem p="2" borderLeft={active ? "2px solid, color:'#868686' #35B368" : undefined}>
            <ListIcon as={MdOutlineDashboard} color="#35B368" />
            Driver
          </ListItem>
        </NavLink> */}
      </List>
      <Box></Box>
    </Container>
  );
};

export default Sidebar;
