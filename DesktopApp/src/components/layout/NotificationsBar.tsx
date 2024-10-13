import {
  Flex,
  useToast,
} from "@chakra-ui/react";
import { NotificationIcon } from "../../bootstrap/icons";

const NotificationsBar = () => {
  const toast = useToast();

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      _focus={{ outline: "none" }}
      _hover={{ color: "brand.main" }}
    >
      <NotificationIcon
        color="black"
        _hover={{ color: "brand.main" }}
      />
    </Flex>
  );
};

export default NotificationsBar;
