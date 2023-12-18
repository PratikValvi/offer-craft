import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box textAlign="center" py="10">
      <Heading as="h2" size="xl" mb="6">
        Features
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        mx="auto"
        maxW="800px"
      >
        <Box bg="teal.100" p="6" borderRadius="xl">
          <Heading as="h3" size="lg" mb="3" color="teal.500">
            Rich Text Editing
          </Heading>
          <Text>
            Experience seamless editing with our powerful rich text editor.
          </Text>
        </Box>
        <Box bg="yellow.100" p="6" borderRadius="xl">
          <Heading as="h3" size="lg" mb="3" color="yellow.500">
            Custom Templates
          </Heading>
          <Text>
            Create personalized templates to use across various documents.
          </Text>
        </Box>
        <Box bg="pink.100" p="6" borderRadius="xl">
          <Heading as="h3" size="lg" mb="3" color="pink.500">
            PDF Export
          </Heading>
          <Text>Easily export your documents to PDF for seamless sharing.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Features;
