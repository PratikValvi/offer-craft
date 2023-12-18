import React from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { AppContextProvider } from "./Contexts/AppContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routes/Home";
import ImportTemplate from "./Routes/ImportTemplate";

const App = () => {
  return (
    <AppContextProvider>
      <NavBar />
      <Container maxW="100%" p={2} centerContent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/import" element={<ImportTemplate />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppContextProvider>
  );
};

export default App;
