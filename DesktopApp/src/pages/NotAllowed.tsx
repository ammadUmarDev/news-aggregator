import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { PAGES } from "../enum";
import { AccessDenied } from "../bootstrap/icons";
import useQuery from "../hooks/useQuery";

function NotAllowed() {
  const navigate = useNavigate();
  let query = useQuery();
  let message = query.get("message");

  const handleClick = () => {
    navigate(PAGES.DASHBOARD);
  };

  return (
    <>
      <Box className="background-image"></Box>
      <Stack alignItems="center" mt="14">
        <Box minW={{ base: "100%", md: "520px" }}>
          <Stack backgroundColor="white" boxShadow="md" borderRadius="12px">
            <Box w="90%" m="35px auto" >
              <Stack flexDir="column" textAlign="center" gap="15px" alignItems="center">
                <AccessDenied h="100px" w="100px" />
                <Heading mt="3">Access Denied</Heading>
                <Box>
                  {message ? <Text color="gray.500">message</Text> :
                    <>
                      <Text color="gray.500">You don't have permission to access this site.</Text>
                      <Text color="gray.500">Contact an administrator to get permissions or sign in with another account.</Text>
                    </>}
                </Box>
                <Button
                  w="full"
                  bg="brand.main"
                  color="white"
                  fontSize="xs"
                  fontWeight="medium"
                  opacity={"1"}
                  cursor={"pointer"}
                  onClick={handleClick}
                >
                  Back to Sign in
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default NotAllowed;
