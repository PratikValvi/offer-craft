import React from "react";
import TinymceEditor from "./Components/TinymceEditor";
import OfferLetterForm from "./Components/OfferLetterForm";
import { Container, Grid } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Container maxW="100%" p={2} centerContent>
        <Grid
          templateColumns={{ base: "100%", md: "3fr 1fr" }}
          gap={4}
          w="100%"
        >
          <TinymceEditor />
          <OfferLetterForm />
        </Grid>
      </Container>
    </>
  );
};

export default App;
