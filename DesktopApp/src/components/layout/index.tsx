import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  const isMobile = useBreakpointValue({ base: true, md: false }) || false;

  return (
    <Flex bg="gray.100" h="100vh" direction="column">
      <Header />
      <Box
        width={isMobile ? "100vw" : "90vw"}
        m="20px auto"
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
export default AppLayout;
