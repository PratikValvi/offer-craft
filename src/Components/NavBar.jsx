import React, { useState } from "react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
    if (!isMobile) {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={{ base: "1rem", md: "1.5rem" }}
      bg="blue.500"
      color="white"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          OfferCraft
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={handleToggle}
        />
      </Box>

      <Box
        display={{ base: isMobile ? "flex" : "none", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        width={{ base: "full", md: "auto" }}
        alignItems={{ base: "center", md: "flex-end" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        flexGrow={1}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: "2rem", md: "0" }}
      >
        <Box mb={{ base: 4, md: 0 }} mx={2}>
          <a href="#home" onClick={onClose}>
            Home
          </a>
        </Box>
        <Box mb={{ base: 4, md: 0 }} mx={2}>
          <a href="#features" onClick={onClose}>
            Features
          </a>
        </Box>
        <Box mb={{ base: 4, md: 0 }} mx={2}>
          <a href="#about" onClick={onClose}>
            About
          </a>
        </Box>
        <Box mb={{ base: 4, md: 0 }} mx={2}>
          <a href="#contact" onClick={onClose}>
            Contact
          </a>
        </Box>
      </Box>
    </Flex>
  );
};

export default NavBar;
