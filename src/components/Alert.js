import { Alert } from "@chakra-ui/react";
import React from "react";

const Message = ({ status, children }) => {
  <Alert status={status}>{children}</Alert>;
};
Message.defaultProps = {
  status: "info",
};
export default Message;
