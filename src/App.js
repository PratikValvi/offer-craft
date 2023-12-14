import React from "react";
import TinymceEditor from "./Components/TinymceEditor";
import OfferLetterForm from "./Components/OfferLetterForm";
import { Container } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Container maxW="100%" centerContent>
        <TinymceEditor />
        <OfferLetterForm />
      </Container>
    </>
  );
};

export default App;
