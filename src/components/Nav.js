import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../actions/UserAction";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";

const Nav = ({ handleToggle, showHam }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(userLogout());
    navigate("/");
  };

  const name = userInfo?.fullName.split(" ");
  const fistName = name[0];
  return (
    <Box display="flex" justifyContent="flex-end" py="2" px="8">
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<HiUserCircle />}
          rightIcon={<IoMdArrowDropdown />}
          bg="transparent"
          _hover={{ bg: "transparent", color: "#35B368" }}
        >
          Hi, {fistName}
        </MenuButton>
        <MenuList>
          <Link to="/profile">
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
      <Box display={showHam ? "none" : "block"}>
        <IconButton
          onClick={handleToggle}
          display={["flex", "flex", "flex", "none"]}
          aria-label="Open Menu"
          size="md"
          textAlign="center"
          bg="#35B368"
          fontSize="16"
          color="#fff"
          icon={<GiHamburgerMenu />}
        />
      </Box>
    </Box>
  );
};

export default Nav;
