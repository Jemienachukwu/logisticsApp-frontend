import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/UserAction";
const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  const name = userInfo.fullName.split(" ");
  const fistName = name[0];
  console.log(fistName);
  return (
    <Box display="flex" justifyContent="flex-end" py="2" px="8">
      {userInfo ? (
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<IoMdArrowDropdown />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          >
            {userInfo.fullName.length >= 9 ? fistName : userInfo.fullName}
          </MenuButton>
          <MenuList>
            <Link to="/profile">
              <MenuItem>Profile</MenuItem>
            </Link>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link to="/login">
          <Button bg="#000" color="#fff" _hover={{ bg: "#000" }}>
            Login
          </Button>{" "}
        </Link>
      )}
    </Box>
  );
};

export default Nav;
