import { Flex, Spinner } from "@chakra-ui/react";

function Loader({ size = "xl" }: { size?: "lg" | "md" | "sm" | "xl" | "xs" }) {
  return (
    <Flex w="full" align="center" justify="center" my="10px">
      <Spinner thickness="4px" speed="0.65s" size={size} color="brand.main" />
    </Flex>
  );
}

export default Loader;
