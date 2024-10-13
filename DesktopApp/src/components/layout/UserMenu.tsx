import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Avatar,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, WarningIcon } from "@chakra-ui/icons";
import PreferenceModal from "../modals/PreferenceModal";
import { useAppContext } from "../../contexts/AppProvider";

const UserMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userPreference } = useAppContext();
  const isUserPreferenceBlank = !userPreference ||
    (!userPreference.categories || userPreference.categories.length === 0) &&
    (!userPreference.sources || userPreference.sources.length === 0);

  return (
    <>
      <Menu>
        <MenuButton>
          <Flex
            gap="1"
            alignItems="center"
            cursor="pointer"
            _focus={{ outline: "none" }}
            _hover={{ color: "brand.main" }}
          >
            <Flex flexDirection="column" align="flex-start" position="relative">
              <Avatar size="xs" src="https://bit.ly/broken-link" />
              {isUserPreferenceBlank && (
                <Icon
                  as={WarningIcon}
                  color="red.500"
                  position="absolute"
                  top="-2px"
                  right="-2px"
                  boxSize="12px"
                />
              )}
            </Flex>
            <ChevronDownIcon
              boxSize="20px"
              color="brand.black"
              _focus={{ outline: "none" }}
              _hover={{ color: "brand.main" }}
            />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem fontSize="md" onClick={onOpen}>
            <Text>
              Set Preference
              {isUserPreferenceBlank && (<Icon
                as={WarningIcon}
                color="red.500"
                position="absolute"
                top="10px"
                left="100px"
                boxSize="12px"
              />)}
            </Text>

          </MenuItem>
        </MenuList>
      </Menu>
      <PreferenceModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default UserMenu;
