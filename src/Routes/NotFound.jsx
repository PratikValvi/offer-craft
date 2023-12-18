import React from "react";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex align="center" justify="center" h="80vh">
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb="6">
          404 - Page Not Found
        </Heading>
        <Text fontSize="xl" mb="6">
          Oops! It seems you're lost in space.
        </Text>
        <Box mb="6">
          <Text fontSize="lg">Let's get you back on track.</Text>
        </Box>
        <Button
          as={RouterLink}
          to="/home"
          colorScheme="teal"
          variant="outline"
          px="8"
          py="4"
          fontSize="lg"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Return Home
        </Button>
      </Box>
    </Flex>
  );
};

export default NotFound;
