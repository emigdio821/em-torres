import theme from "theme";
import Navbar from "components/Nabvar";
import Footer from "components/Footer";
import AppdRoutes from "components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Flex, ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Flex h="100vh" direction="column" justify="space-between">
          <Navbar />
          <AppdRoutes />
          <Footer />
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
}
