import React from "react";
import { Grid } from "@chakra-ui/react";
import TinymceEditor from "../Components/TinymceEditor";
import OfferLetterForm from "../Components/OfferLetterForm";

const Home = () => {
  return (
    <Grid templateColumns={{ base: "100%", md: "3fr 1fr" }} gap={4} w="100%">
      <TinymceEditor />
      <OfferLetterForm />
    </Grid>
  );
};

export default Home;
