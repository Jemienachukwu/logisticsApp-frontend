import React, { useState, useRef, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const windowSize = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      windowSize.current = window.innerWidth;
      if (windowSize.current <= 990) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleToggle() {
    setShowNav((prevToggle) => !prevToggle);
  }

  return (
    <Grid
      h="100vh"
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(10, 1fr)"
      gap={1}
      bg="#F5f7f5"
    >
      <GridItem
        display={{ base: showNav ? "block" : "none", lg: "block", xl: "block" }}
        colSpan={{ base: 12, lg: 2, xl: 2 }}
        rowSpan={{ base: 1, lg: 10, xl: 10 }}
      >
        <Sidebar handleToggle={handleToggle} setShowNav={setShowNav} />
      </GridItem>
      <GridItem
        colSpan={{ base: 12, lg: 10, xl: 10 }}
        rowSpan={{ base: 1, lg: 1, xl: 1 }}
      >
        <Nav handleToggle={handleToggle} showHam={showNav} />
      </GridItem>
      <GridItem
        colSpan={{ base: 12, lg: 10, xl: 10 }}
        rowSpan={{ base: 10, lg: 10, xl: 10 }}
        bg="#fff"
        overflowX="hidden"
        p="3"
      >
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
