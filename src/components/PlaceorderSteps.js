import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const PlaceorderSteps = ({ step1, step2, step3 }) => {
  return (
    <Flex gap={["1", "2", "3", "5"]}>
      <Box>
        {step1 ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#35B368",
                  }
                : {
                    color: "#868686",
                  }
            }
            to="/placeorder"
          >
            <Text fontSize="xs">Place order</Text>
          </NavLink>
        ) : (
          <Text fontSize="xs" disabled>
            Place order
          </Text>
        )}
      </Box>

      <Box>
        {step2 ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#35B368",
                  }
                : {
                    color: "#868686",
                  }
            }
            to="/placeorder/requestdeivery"
          >
            <Text fontSize="xs">Request deivery</Text>
          </NavLink>
        ) : (
          <Text fontSize="xs" disabled>
            Request deivery
          </Text>
        )}
      </Box>

      <Box>
        {step3 ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#35B368",
                  }
                : {
                    color: "#868686",
                  }
            }
            to="/bookdispatcher"
          >
            <Text fontSize="xs">Book dispatcher</Text>
          </NavLink>
        ) : (
          <Text fontSize="xs" disabled>
            Book dispatcher
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default PlaceorderSteps;
