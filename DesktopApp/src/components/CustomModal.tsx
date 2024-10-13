import { InfoIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  ModalFooter,
  Button,
  Text
} from "@chakra-ui/react";
import { ReactNode } from "react";

const CustomModal = ({
  children,
  headerText,
  isOpen,
  leftIcon = undefined,
  size = "md",
  isScrollable = true,
  isSaveDisabled = false,
  saveButtonText = "Save",
  closeButtonText = "Discard",
  disabled = false,
  disabledText,
  onClose,
  onSave,
}: {
  children: React.ReactNode;
  headerText: string;
  isOpen: boolean;
  leftIcon?: React.ReactElement | undefined;
  size?: "sm" | "md" | "lg" | "xl";
  isScrollable?: boolean;
  saveButtonText?: string | ReactNode;
  closeButtonText?: string;
  disabled?: boolean;
  disabledText?: string
  onClose: () => void;
  onSave: () => void;
  isSaveDisabled?: boolean
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={size}
      scrollBehavior={isScrollable ? "inside" : "outside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalCloseButton disabled={disabled} />
        <ModalBody>
          <Flex direction="column">{children}</Flex>
        </ModalBody>

        <ModalFooter gap="12px" justifyContent="space-between">
          {isSaveDisabled && disabledText ?
            <Flex flexDirection="row" gap="5px" alignItems='center'>
              <InfoIcon color="red" />
              <Text fontSize="sm" color="red">{disabledText}</Text>
            </Flex> : <Flex />}
          <Flex gap="12px" >
            <Button
              fontSize="xs"
              fontWeight="medium"
              onClick={onClose}
              isDisabled={disabled}
            >
              {closeButtonText}
            </Button>
            <Button
              bg="brand.main"
              color="white"
              fontSize="xs"
              fontWeight="medium"
              onClick={!isSaveDisabled ? onSave : () => { }}
              leftIcon={leftIcon}
              isDisabled={disabled}
              cursor={isSaveDisabled ? "not-allowed" : "pointer"}
              opacity={isSaveDisabled ? "0.5" : "1"}
            >
              {saveButtonText}
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
