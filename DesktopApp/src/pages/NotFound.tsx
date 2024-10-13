import { Box, Heading } from "@chakra-ui/react";

function NotFound() {
  return (
    <Box padding="20px" minW={{ base: "100%" }}>
      <Heading fontSize={"18px"}>You don't have access to this app</Heading>
    </Box>
  );
}
export default NotFound;
