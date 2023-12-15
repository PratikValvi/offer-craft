import React, { useRef } from "react";
import TinymceEditor from "./Components/TinymceEditor";
import OfferLetterForm from "./Components/OfferLetterForm";
import { Container, Grid } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { enableButton, disableButton } from "./utility";

const App = () => {
  const addVariableButtonRef = useRef(null);

  const handleSelectionChange = (e, editor) => {
    if (addVariableButtonRef.current) {
      const selectionContent = editor.selection.getContent();
      const addVariableButton = addVariableButtonRef.current;
      if (selectionContent && selectionContent.length > 0) {
        enableButton(addVariableButton);
      } else {
        disableButton(addVariableButton);
      }
    }
  };

  return (
    <>
      <NavBar />
      <Container maxW="100%" p={2} centerContent>
        <Grid
          templateColumns={{ base: "100%", md: "3fr 1fr" }}
          gap={4}
          w="100%"
        >
          <TinymceEditor handleSelectionChange={handleSelectionChange} />
          <OfferLetterForm ref={addVariableButtonRef} />
        </Grid>
      </Container>
    </>
  );
};

export default App;
