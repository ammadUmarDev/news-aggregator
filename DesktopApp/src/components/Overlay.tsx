import { Box } from "@chakra-ui/react";

function Overlay(): JSX.Element {
  return (
    <Box
      bg="black"
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      opacity={0.15}
      zIndex={1}
    />
  );
}
export default Overlay;
